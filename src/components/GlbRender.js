import { useGLTF } from "@react-three/drei";


export default function GlbRender({ position, path, rotation=[0, 0, 0] }) {
  const { scene } = useGLTF(path);

  scene.children.forEach((_, index) => scene.children[index].castShadow = true);

  return (
    <mesh rotation={rotation} position={position}>
      <primitive object={scene} />
    </mesh>
  );
};