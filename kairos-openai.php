<?php
/**
 * Plugin Name: Kairos OpenAI Assistant
 * Description: Custom OpenAI integration for WordPress via Responses API.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('kairos/v1', '/ask', [
        'methods'  => 'POST',
        'callback' => 'kairos_openai_ask_handler',
        'permission_callback' => '__return_true',
    ]);
});

function kairos_openai_ask_handler(WP_REST_Request $request) {
    $nonce = $request->get_header('X-WP-Nonce');

    if (!$nonce || !wp_verify_nonce($nonce, 'wp_rest')) {
        return new WP_REST_Response([
            'success' => false,
            'error' => 'Invalid nonce',
        ], 403);
    }

    $params = $request->get_json_params();
    $user_message = isset($params['message']) ? sanitize_textarea_field($params['message']) : '';

    if (empty($user_message)) {
        return new WP_REST_Response([
            'success' => false,
            'error' => 'Empty message',
        ], 400);
    }

    if (!defined('OPENAI_API_KEY') || empty(OPENAI_API_KEY)) {
        return new WP_REST_Response([
            'success' => false,
            'error' => 'API key is not configured',
        ], 500);
    }

    $system_prompt = <<<EOT
Ты — AI-ассистент сайта психологической практики Виктора.
Отвечай спокойно, профессионально и ясно.
Не ставь диагнозы.
Не обещай лечение.
Не давай экстренных клинических указаний.
Если запрос про кризис, суицидальный риск или неотложную помощь — рекомендуй срочно обратиться в местные экстренные службы или в ближайшую кризисную помощь.
Отвечай только по темам:
- формат работы
- запись и организационные вопросы
- общая информация об услугах
- FAQ сайта
Если вопрос вне этих рамок — мягко сообщи, что ассистент отвечает только по вопросам работы практики.
EOT;

    $body = [
        'model' => 'gpt-5',
        'input' => [
            [
                'role' => 'system',
                'content' => [
                    [
                        'type' => 'input_text',
                        'text' => $system_prompt
                    ]
                ]
            ],
            [
                'role' => 'user',
                'content' => [
                    [
                        'type' => 'input_text',
                        'text' => $user_message
                    ]
                ]
            ]
        ]
    ];

    $response = wp_remote_post('https://api.openai.com/v1/responses', [
        'headers' => [
            'Authorization' => 'Bearer ' . OPENAI_API_KEY,
            'Content-Type'  => 'application/json',
        ],
        'body'    => wp_json_encode($body),
        'timeout' => 45,
    ]);

    if (is_wp_error($response)) {
        return new WP_REST_Response([
            'success' => false,
            'error' => $response->get_error_message(),
        ], 500);
    }

    $status_code = wp_remote_retrieve_response_code($response);
    $raw_body = wp_remote_retrieve_body($response);
    $data = json_decode($raw_body, true);

    if ($status_code >= 400) {
        return new WP_REST_Response([
            'success' => false,
            'error' => $data,
        ], $status_code);
    }

    $text = '';

    if (!empty($data['output']) && is_array($data['output'])) {
        foreach ($data['output'] as $output_item) {
            if (!empty($output_item['content']) && is_array($output_item['content'])) {
                foreach ($output_item['content'] as $content_item) {
                    if (($content_item['type'] ?? '') === 'output_text') {
                        $text .= $content_item['text'] ?? '';
                    }
                }
            }
        }
    }

    return new WP_REST_Response([
        'success' => true,
        'answer'  => trim($text),
    ], 200);
}