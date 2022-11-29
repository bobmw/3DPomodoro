import { useCursor } from "@react-three/drei";
import { useContext, useMemo, useState } from "react";
import { context } from "../context";

export default function Button({ position, color, args, onClick }) {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { setResetTimer } = useContext(context);

  useCursor(hovered);

  const positionButton = useMemo(() => {
    return [
      position[0],
      (pressed ? position[1] - 0.1 : position[1]),
      position[2]
    ];
  }, [pressed, position]);

  return (
    <mesh
      onPointerDown={() => {
        setPressed(true);
        onClick();
      }}
      onPointerUp={() => {
        setPressed(false);
        setResetTimer(false);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={positionButton}
      receiveShadow
      castShadow
    >
      <boxGeometry args={args} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
}