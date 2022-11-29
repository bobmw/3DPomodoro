import { Canvas } from "@react-three/fiber";
import Provider from "./context";
import Scene from "./containers/Scene";

function App() {
  return (
    <Provider>
      <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100vw' }} camera={{
        position: [50, 40, 90],
        fov: 50
      }} shadows>
       <Scene />
      </Canvas>
    </Provider>
  );
}

export default App;
