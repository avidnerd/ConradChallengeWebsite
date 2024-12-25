import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  // Load a GLTF/GLB model
  const { scene } = useGLTF("/Users/subhikshastephan/CodeProjects/ConradChallengeWebsite/conrad-solar/components/retro_computer.glb");
  return <primitive object={scene} scale={1} />;
};

const ThreeRender = () => (
  <Canvas style={{ height: "400px", width: "100%" }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} />
    <Model />
    <OrbitControls />
  </Canvas>
);

export default ThreeRender;
