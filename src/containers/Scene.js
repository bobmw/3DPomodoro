import { Physics } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useContext } from "react";
import FallBack from "../components/Fallback";
import Plane from "../components/Plane";
import Timer from "../components/Timer";
import GlbRender from "../components/GlbRender";
import { context } from "../context";
import ButtonContainer from "./ButtonContainer";

export default function Scene() {
  const { sceneBackgroundColor, scenePointLightColor, timerBreak } = useContext(context);

  return (
    <>
      <color attach="background" args={sceneBackgroundColor} />
      <Suspense fallback={<FallBack />}>
        <OrbitControls minDistance={20} maxDistance={80} maxPolarAngle={10}/>
        <ambientLight intensity={0.5} />
        <pointLight position={[42, 61, 13]} color={scenePointLightColor} castShadow />
        <Stars />
        <Physics>
          <GlbRender position={[2, -2, 18]} path='/assets/rock.glb' />
          <GlbRender position={[-15, -2, -30]} rotation={[0, 2, 0]} path='/assets/rock0.glb' />
          <GlbRender position={[-3, -2, 13]} path='/assets/tree0.glb' />
          <GlbRender position={[20, -2, -19]} rotation={[0, 2, 0]} path='/assets/tree1.glb' />
          <Timer color={timerBreak ? '#53b2ff' : 'yellow'} fontPath={'/typefaces/optimer.typeface.json'} />
          <ButtonContainer />
          <Plane color={"#407940"} />
        </Physics>
      </Suspense>
    </>
  );
}
