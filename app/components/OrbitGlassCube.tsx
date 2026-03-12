"use client";

export default function OrbitGlassCube() {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <svg
        className="orbit-svg"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,140,80,0.55)" />
            <stop offset="35%" stopColor="rgba(255,80,160,0.26)" />
            <stop offset="70%" stopColor="rgba(80,180,255,0.16)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          <linearGradient id="glassStrokeA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(180,240,255,0.9)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.38)" />
            <stop offset="100%" stopColor="rgba(255,190,150,0.75)" />
          </linearGradient>

          <linearGradient id="glassStrokeB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(120,160,255,0.7)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,120,80,0.65)" />
          </linearGradient>

          <linearGradient id="coreFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7b38" />
            <stop offset="35%" stopColor="#ffb347" />
            <stop offset="65%" stopColor="#ff4fa3" />
            <stop offset="100%" stopColor="#7edbff" />
          </linearGradient>

          <filter id="blurXL" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" />
          </filter>

          <filter id="blurMD" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern
            id="microGrid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Фоновые свечения */}
        <circle cx="400" cy="400" r="250" fill="url(#bgGlow)" filter="url(#blurXL)" />
        <circle cx="400" cy="400" r="120" fill="rgba(255,160,80,0.55)" filter="url(#blurXL)" />
        <circle cx="400" cy="400" r="85" fill="rgba(255,90,170,0.30)" filter="url(#blurMD)" />

        {/* Легкие вертикальные световые шлейфы */}
        <g className="light-curtains">
          <rect x="120" y="40" width="14" height="720" rx="10" fill="rgba(130,160,255,0.14)" filter="url(#blurMD)" />
          <rect x="220" y="0" width="10" height="760" rx="10" fill="rgba(255,80,190,0.10)" filter="url(#blurMD)" />
          <rect x="610" y="20" width="12" height="720" rx="10" fill="rgba(255,170,120,0.11)" filter="url(#blurMD)" />
        </g>

        {/* Общая орбита всей конструкции */}
        <g className="whole-orbit">
          {/* Внешние стеклянные кубы */}
          <g opacity="0.9">
            {/* Левый */}
            <g transform="translate(-75, 25)">
              <polygon
                points="215,180 365,180 365,520 215,520"
                fill="rgba(255,255,255,0.03)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2.2"
              />
              <polygon
                points="215,180 275,135 425,135 365,180"
                fill="rgba(255,255,255,0.02)"
                stroke="url(#glassStrokeB)"
                strokeWidth="2"
              />
              <polygon
                points="365,180 425,135 425,475 365,520"
                fill="rgba(255,255,255,0.02)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2"
              />
            </g>

            {/* Центральный */}
            <g transform="translate(0, -10)">
              <polygon
                points="275,180 525,180 525,590 275,590"
                fill="rgba(255,255,255,0.035)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2.4"
              />
              <polygon
                points="275,180 355,120 605,120 525,180"
                fill="rgba(255,255,255,0.025)"
                stroke="url(#glassStrokeB)"
                strokeWidth="2.2"
              />
              <polygon
                points="525,180 605,120 605,530 525,590"
                fill="rgba(255,255,255,0.025)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2.2"
              />
            </g>

            {/* Правый */}
            <g transform="translate(90, 25)">
              <polygon
                points="215,180 365,180 365,520 215,520"
                fill="rgba(255,255,255,0.03)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2.2"
              />
              <polygon
                points="215,180 275,135 425,135 365,180"
                fill="rgba(255,255,255,0.02)"
                stroke="url(#glassStrokeB)"
                strokeWidth="2"
              />
              <polygon
                points="365,180 425,135 425,475 365,520"
                fill="rgba(255,255,255,0.02)"
                stroke="url(#glassStrokeA)"
                strokeWidth="2"
              />
            </g>
          </g>

          {/* Внутреннее ядро */}
          <g className="core-spin">
            <g filter="url(#glow)">
              <rect x="305" y="305" width="190" height="190" rx="8" fill="url(#coreFill)" opacity="0.22" />
            </g>

            {/* Сетка / стеклянные блоки */}
            <g className="inner-grid">
              {[
                [325, 255, 72, 72, 0.34],
                [395, 250, 84, 84, 0.25],
                [290, 330, 78, 78, 0.28],
                [360, 320, 95, 95, 0.34],
                [445, 330, 62, 62, 0.28],
                [318, 405, 68, 68, 0.26],
                [388, 398, 88, 88, 0.30],
                [470, 390, 52, 52, 0.25],
                [350, 458, 72, 72, 0.22],
                [430, 458, 56, 56, 0.20],
                [248, 360, 50, 50, 0.18],
                [510, 360, 50, 50, 0.18],
              ].map(([x, y, w, h, o], i) => (
                <g key={i} className={`block block-${i + 1}`}>
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="url(#glassStrokeA)"
                    strokeWidth="1.6"
                    opacity={o}
                  />
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    rx="4"
                    fill="url(#microGrid)"
                    opacity="0.35"
                  />
                </g>
              ))}

              {/* Яркий центр */}
              <g className="heart-pulse">
                <rect
                  x="350"
                  y="350"
                  width="100"
                  height="100"
                  rx="6"
                  fill="url(#coreFill)"
                  opacity="0.7"
                  filter="url(#blurMD)"
                />
                <rect
                  x="367"
                  y="367"
                  width="66"
                  height="66"
                  rx="4"
                  fill="rgba(255,255,255,0.35)"
                  opacity="0.65"
                />
              </g>
            </g>
          </g>

          {/* Блики на полу */}
          <ellipse
            cx="400"
            cy="655"
            rx="205"
            ry="38"
            fill="rgba(140,220,255,0.16)"
            filter="url(#blurMD)"
            className="floor-glow"
          />
          <ellipse
            cx="400"
            cy="665"
            rx="135"
            ry="20"
            fill="rgba(255,140,80,0.16)"
            filter="url(#blurMD)"
            className="floor-glow-2"
          />
        </g>
      </svg>

      <style jsx>{`
        .orbit-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          min-height: 420px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 50%, rgba(15, 20, 40, 0.18), transparent 45%),
            linear-gradient(180deg, rgba(8, 10, 18, 0.96), rgba(7, 9, 16, 0.98));
          border-radius: 28px;
        }

        .orbit-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .whole-orbit {
          transform-origin: 400px 400px;
          animation: driftRotate 24s ease-in-out infinite alternate;
        }

        .core-spin {
          transform-origin: 400px 400px;
          animation: coreSpin 18s linear infinite;
        }

        .inner-grid {
          transform-origin: 400px 400px;
          animation: shimmer 8s ease-in-out infinite;
        }

        .heart-pulse {
          transform-origin: 400px 400px;
          animation: pulse 4.8s ease-in-out infinite;
        }

        .light-curtains {
          animation: curtains 10s ease-in-out infinite alternate;
        }

        .floor-glow {
          animation: floorBreath 7s ease-in-out infinite;
        }

        .floor-glow-2 {
          animation: floorBreath 5.5s ease-in-out infinite reverse;
        }

        .block-1 { animation: blockFloat1 7s ease-in-out infinite; transform-origin: 361px 291px; }
        .block-2 { animation: blockFloat2 8s ease-in-out infinite; transform-origin: 437px 292px; }
        .block-3 { animation: blockFloat3 7.2s ease-in-out infinite; transform-origin: 329px 369px; }
        .block-4 { animation: blockFloat4 9s ease-in-out infinite; transform-origin: 407px 367px; }
        .block-5 { animation: blockFloat2 7.7s ease-in-out infinite; transform-origin: 476px 361px; }
        .block-6 { animation: blockFloat1 8.4s ease-in-out infinite; transform-origin: 352px 439px; }
        .block-7 { animation: blockFloat3 9.2s ease-in-out infinite; transform-origin: 432px 442px; }
        .block-8 { animation: blockFloat4 6.8s ease-in-out infinite; transform-origin: 496px 416px; }
        .block-9 { animation: blockFloat2 8.1s ease-in-out infinite; transform-origin: 386px 494px; }
        .block-10 { animation: blockFloat1 7.3s ease-in-out infinite; transform-origin: 458px 486px; }
        .block-11 { animation: blockFloat4 7.9s ease-in-out infinite; transform-origin: 273px 385px; }
        .block-12 { animation: blockFloat3 8.6s ease-in-out infinite; transform-origin: 535px 385px; }

        @keyframes driftRotate {
          0% {
            transform: rotate(-2deg) translateY(2px) scale(0.99);
          }
          50% {
            transform: rotate(1.5deg) translateY(-3px) scale(1.01);
          }
          100% {
            transform: rotate(3deg) translateY(2px) scale(0.995);
          }
        }

        @keyframes coreSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.92;
            filter: brightness(1) saturate(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.18) saturate(1.18);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0.98);
            opacity: 0.82;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes curtains {
          0% {
            opacity: 0.65;
            transform: translateY(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(-8px);
          }
        }

        @keyframes floorBreath {
          0%, 100% {
            opacity: 0.6;
            transform: scaleX(0.96);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.05);
          }
        }

        @keyframes blockFloat1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-4px, -8px) rotate(-2deg); }
        }

        @keyframes blockFloat2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(6px, -5px) rotate(2deg); }
        }

        @keyframes blockFloat3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-5px, 5px) rotate(1.6deg); }
        }

        @keyframes blockFloat4 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(4px, 7px) rotate(-1.8deg); }
        }

        @media (max-width: 768px) {
          .orbit-wrap {
            min-height: 320px;
            border-radius: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .whole-orbit,
          .core-spin,
          .inner-grid,
          .heart-pulse,
          .light-curtains,
          .floor-glow,
          .floor-glow-2,
          .block-1,
          .block-2,
          .block-3,
          .block-4,
          .block-5,
          .block-6,
          .block-7,
          .block-8,
          .block-9,
          .block-10,
          .block-11,
          .block-12 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}