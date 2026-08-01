import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Line, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { getToonGradientTexture } from "./toonGradient";

const PALETTE = {
  blue: "#4A72FF",
  violet: "#8C6BFF",
  cyan: "#32C7E8",
  pink: "#FF7EB6",
  white: "#FFFFFF",
  base: "#EAF1FF",
};

function ParallaxRig({ children, active }) {
  const group = useRef();
  useFrame((state) => {
    if (!active.current || !group.current) return;
    const targetX = state.pointer.y * 0.12;
    const targetY = state.pointer.x * 0.18;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
  });
  return <group ref={group}>{children}</group>;
}

function Core() {
  const gradientMap = useMemo(() => getToonGradientTexture(), []);
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.7}>
      <group position={[0, 0.4, 0]}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshToonMaterial color={PALETTE.blue} gradientMap={gradientMap} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0.3, 0]}>
          <torusGeometry args={[1.3, 0.02, 8, 48]} />
          <meshBasicMaterial color={PALETTE.cyan} transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[Math.PI / 2.1, -0.4, 0]}>
          <torusGeometry args={[1.55, 0.015, 8, 48]} />
          <meshBasicMaterial color={PALETTE.violet} transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function Island({ position, scale = 1, color = PALETTE.base, buildingColor = PALETTE.blue, speed = 1.2 }) {
  const gradientMap = useMemo(() => getToonGradientTexture(), []);
  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={1.1} position={position}>
      <group scale={scale}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.55, 0.75, 0.22, 7]} />
          <meshToonMaterial color={color} gradientMap={gradientMap} />
        </mesh>
        <mesh position={[0, 0.32, 0]}>
          <boxGeometry args={[0.28, 0.42, 0.28]} />
          <meshToonMaterial color={buildingColor} gradientMap={gradientMap} />
        </mesh>
        <mesh position={[0, 0.32, 0]}>
          <coneGeometry args={[0.24, 0.2, 4]} />
          <meshToonMaterial color={PALETTE.violet} gradientMap={gradientMap} />
        </mesh>
        <mesh position={[0, -0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.008, 6, 24]} />
          <meshBasicMaterial color={PALETTE.cyan} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function Screen({ position, rotation = [0, 0, 0], color = PALETTE.blue, scale = 1 }) {
  return (
    <Float speed={1.6} rotationIntensity={0.08} floatIntensity={0.9} position={position}>
      <group rotation={rotation} scale={scale}>
        <RoundedBox args={[0.55, 0.36, 0.02]} radius={0.04} smoothness={2}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
        </RoundedBox>
        <RoundedBox args={[0.55, 0.36, 0.021]} radius={0.04} smoothness={2}>
          <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
        </RoundedBox>
        {[[-0.15, 0.08], [0.05, 0.08], [-0.15, -0.06], [0.15, -0.06]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.015]}>
            <planeGeometry args={[0.14, 0.035]} />
            <meshBasicMaterial color={color} transparent opacity={0.65} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function DataTrail() {
  const points = useMemo(
    () => [
      new THREE.Vector3(-2.3, -0.4, -0.6),
      new THREE.Vector3(-1, 0.1, 0.2),
      new THREE.Vector3(0.6, -0.2, 0.6),
      new THREE.Vector3(2.2, 0.3, -0.3),
    ],
    []
  );
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const linePoints = useMemo(() => curve.getPoints(40), [curve]);
  const vehicleRef = useRef();
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current = (t.current + delta * 0.09) % 1;
    if (vehicleRef.current) {
      const p = curve.getPointAt(t.current);
      vehicleRef.current.position.copy(p);
    }
  });

  return (
    <group>
      <Line points={linePoints} color={PALETTE.violet} transparent opacity={0.35} dashed dashSize={0.08} gapSize={0.06} lineWidth={1} />
      <mesh ref={vehicleRef}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color={PALETTE.cyan} />
      </mesh>
    </group>
  );
}

function SceneContents({ reduced, mobile, pointerActive }) {
  const islands = [
    { position: [-2.1, -0.3, -0.4], color: "#EEF5FF", buildingColor: PALETTE.blue },
    { position: [2, -0.5, -0.2], color: "#F5F0FF", buildingColor: PALETTE.violet, scale: 0.85 },
    { position: [-1.3, 0.9, -1.1], color: "#EEF5FF", buildingColor: PALETTE.cyan, scale: 0.7, speed: 1.6 },
    { position: [1.5, 0.85, -1], color: "#FFF4EE", buildingColor: PALETTE.pink, scale: 0.6, speed: 1.8 },
  ];
  const screens = [
    { position: [-1.6, 0.15, 0.6], rotation: [0, 0.5, 0], color: PALETTE.blue },
    { position: [1.7, 0.35, 0.5], rotation: [0, -0.5, 0.05], color: PALETTE.violet, scale: 0.85 },
  ];

  return (
    <ParallaxRig active={pointerActive}>
      <Core />
      {islands.map((isl, i) => (
        <Island key={i} {...isl} />
      ))}
      {screens.map((s, i) => (
        <Screen key={i} {...s} />
      ))}
      {!mobile && !reduced && <DataTrail />}
    </ParallaxRig>
  );
}

export default function BrainlinkDigitalCity({ reducedMotion = false, mobile = false }) {
  const pointerActive = useRef(!reducedMotion);
  pointerActive.current = !reducedMotion;

  return (
    <Canvas
      dpr={mobile ? 1 : [1, 1.5]}
      camera={{ position: [0, 0.3, 5.2], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 4]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-4, -2, -2]} intensity={0.35} color={PALETTE.violet} />
      <SceneContents reduced={reducedMotion} mobile={mobile} pointerActive={pointerActive} />
      <AdaptiveDpr pixelated={false} />
    </Canvas>
  );
}
