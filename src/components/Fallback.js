import { Html } from "@react-three/drei";

export default function FallBack() {
  return (
    <>
      <color attach="background" args={['#565656']} />
      <Html fullscreen>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1 style={{ color: 'white' }}>CARREGANDO...</h1>
        </div>
      </Html>
    </>
  );
}