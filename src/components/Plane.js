import { usePlane } from "@react-three/cannon";
import { DoubleSide } from "three";

export default function Plane({ color }) {
  const [ref] = usePlane(() => ({
    rotation: [(-Math.PI / 2), 0, 0],
    position: [0, -2, 0],
    type: 'Static',
    mass: 10
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={color} side={DoubleSide} />
    </mesh>
  );
}
