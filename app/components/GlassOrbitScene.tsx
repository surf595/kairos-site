"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useMemo, useRef } from "react";

type BlockConfig = {
  position: [number, number, number];
  scale: [number, number, number];
  speed: number;
  phase: number;
  orbitRadius: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function GlassShell({
  scale = [3, 3, 3],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.22) * 0.02;
    meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.18) * 0.03;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      renderOrder={2}
    >
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={256}
        transmission={1}
        thickness={0.45}
        roughness={0.08}
        ior={1.18}
        chromaticAberration={0.02}
        anisotropy={0.08}
        distortion={0.08}
        distortionScale={0.2}
        temporalDistortion={0.08}
        clearcoat={1}
        clearcoatRoughness={0.08}
        attenuationColor="#b8dfff"
        attenuationDistance={1.2}
        color="#d7ebff"
      />
    </mesh>
  );
}

function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const s = 1 + Math.sin(t * 1.2) * 0.06;
    ref.current.scale.setScalar(s);
  });

  return (
    <group>
      <mesh ref={ref}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#ff8a3d"
          emissive="#ff7a2f"
          emissiveIntensity={3.5}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh scale={1.65}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ff69b4" transparent opacity={0.08} />
      </mesh>

      <mesh scale={2.1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#7bdcff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

function OrbitBlocks() {
  const groupRef = useRef<THREE.Group>(null);

  const blocks = useMemo<BlockConfig[]>(() => {
    return [
      { position: [-0.9, 0.3, 0.2], scale: [0.42, 0.7, 0.18], speed: 0.55, phase: 0.1, orbitRadius: 0.12 },
      { position: [0.8, -0.1, -0.25], scale: [0.55, 0.45, 0.2], speed: 0.42, phase: 1.7, orbitRadius: 0.14 },
      { position: [-0.3, -0.8, 0.35], scale: [0.62, 0.35, 0.18], speed: 0.47, phase: 2.1, orbitRadius: 0.1 },
      { position: [0.35, 0.7, -0.3], scale: [0.38, 0.56, 0.18], speed: 0.51, phase: 2.7, orbitRadius: 0.1 },
      { position: [0.1, 0.2, 0.9], scale: [0.48, 0.48, 0.16], speed: 0.6, phase: 0.8, orbitRadius: 0.08 },
      { position: [-0.1, -0.2, -0.95], scale: [0.5, 0.36, 0.16], speed: 0.46, phase: 1.1, orbitRadius: 0.08 },
      { position: [1.0, 0.45, 0.05], scale: [0.3, 0.3, 0.14], speed: 0.64, phase: 2.8, orbitRadius: 0.06 },
      { position: [-1.0, -0.35, -0.08], scale: [0.28, 0.4, 0.14], speed: 0.58, phase: 0.4, orbitRadius: 0.06 },
      { position: [0.45, -0.55, 0.55], scale: [0.34, 0.28, 0.14], speed: 0.62, phase: 1.3, orbitRadius: 0.07 },
      { position: [-0.55, 0.55, -0.55], scale: [0.34, 0.28, 0.14], speed: 0.52, phase: 2.2, orbitRadius: 0.07 },
      { position: [0.0, 1.0, 0.0], scale: [0.26, 0.26, 0.14], speed: 0.73, phase: 0.9, orbitRadius: 0.05 },
      { position: [0.0, -1.0, 0.0], scale: [0.26, 0.26, 0.14], speed: 0.73, phase: 2.9, orbitRadius: 0.05 },
    ];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y += 0.0024;
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.08;

    groupRef.current.children.forEach((child, i) => {
      const cfg = blocks[i];
      const tt = t * cfg.speed + cfg.phase;

      child.position.x = cfg.position[0] + Math.cos(tt) * cfg.orbitRadius;
      child.position.y = cfg.position[1] + Math.sin(tt * 1.2) * cfg.orbitRadius * 0.7;
      child.position.z = cfg.position[2] + Math.sin(tt) * cfg.orbitRadius;

      child.rotation.x += 0.003;
      child.rotation.y += 0.004;
    });
  });

  return (
    <group ref={groupRef}>
      {blocks.map((b, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={0.12}
          floatIntensity={0.12}
        >
          <mesh position={b.position} scale={b.scale} renderOrder={3}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial
              color={i % 3 === 0 ? "#ffb38a" : i % 3 === 1 ? "#ffd5f2" : "#bfe9ff"}
              emissive={i % 3 === 0 ? "#ff7a2f" : i % 3 === 1 ? "#ff66bb" : "#78d8ff"}
              emissiveIntensity={0.45}
              transparent
              opacity={0.35}
              roughness={0.15}
              metalness={0.05}
              transmission={0.7}
              thickness={0.35}
              ior={1.12}
              clearcoat={1}
              clearcoatRoughness={0.12}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function LightRig() {
  return (
    <>
      <ambientLight intensity={0.55} />

      <pointLight
        position={[0, 0, 0]}
        intensity={28}
        color="#ff8a3d"
        distance={12}
      />

      <pointLight
        position={[2.8, 2.2, 3.5]}
        intensity={16}
        color="#7bdcff"
        distance={14}
      />

      <pointLight
        position={[-3.2, -1.8, 2.8]}
        intensity={10}
        color="#ff66bb"
        distance={10}
      />

      <directionalLight
        position={[0, 4, 5]}
        intensity={1.2}
        color="#ffffff"
      />
    </>
  );
}

function CameraDrift() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    const targetX = mouse.x * 0.35;
    const targetY = mouse.y * 0.2;

    camera.position.x = lerp(camera.position.x, targetX, 0.03);
    camera.position.y = lerp(camera.position.y, targetY, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneObject() {
  const rootRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!rootRef.current) return;
    const t = state.clock.elapsedTime;
    rootRef.current.rotation.y = t * 0.12;
    rootRef.current.rotation.z = Math.sin(t * 0.18) * 0.04;
    rootRef.current.position.y = Math.sin(t * 0.55) * 0.08;
  });

  return (
    <group ref={rootRef}>
      <GlassShell
        scale={[3.4, 3.4, 3.4]}
        position={[0, 0, 0]}
        rotation={[0.08, 0.1, 0]}
      />
      <GlassShell
        scale={[2.8, 2.8, 2.8]}
        position={[-0.75, 0.08, 0.18]}
        rotation={[0, -0.22, 0.03]}
      />
      <GlassShell
        scale={[2.8, 2.8, 2.8]}
        position={[0.82, -0.04, -0.12]}
        rotation={[0, 0.24, -0.03]}
      />

      <CoreGlow />
      <OrbitBlocks />
    </group>
  );
}

function BackgroundPlanes() {
  return (
    <group>
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color="#060812" />
      </mesh>

      <mesh position={[0, 0, -4.5]}>
        <planeGeometry args={[18, 18]} />
        <meshBasicMaterial color="#102030" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function FloorGlow() {
  return (
    <group position={[0, -2.7, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial color="#7bdcff" transparent opacity={0.08} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[1.9, 64]} />
        <meshBasicMaterial color="#ff8a3d" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function GlassOrbitScene() {
  return (
    <div className="glass-orbit-scene">
      <Canvas dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={32} />

        <color attach="background" args={["#050814"]} />
        <fog attach="fog" args={["#050814", 8, 16]} />

        <BackgroundPlanes />
        <CameraDrift />
        <LightRig />
        <FloorGlow />

        <SceneObject />

        <Environment preset="city" />

        <EffectComposer>
          <Bloom
            intensity={1.4}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.8}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>

      <style jsx>{`
        .glass-orbit-scene {
          position: relative;
          width: 100%;
          height: 680px;
          min-height: 480px;
          border-radius: 28px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 50%, rgba(255, 120, 70, 0.08), transparent 22%),
            radial-gradient(circle at 68% 35%, rgba(110, 220, 255, 0.08), transparent 20%),
            linear-gradient(180deg, #070b16 0%, #050814 100%);
        }

        @media (max-width: 1024px) {
          .glass-orbit-scene {
            height: 560px;
            border-radius: 24px;
          }
        }

        @media (max-width: 768px) {
          .glass-orbit-scene {
            height: 420px;
            min-height: 320px;
            border-radius: 20px;
          }
        }
      `}</style>
    </div>
  );
}