// "use client";
// import { Canvas } from "@react-three/fiber";
// import Model from "./Model";
// import { Environment, CameraControls } from "@react-three/drei";

// export default function Scene() {
//   return (
//     <Canvas
//       orthographic
//       style={{ background: "black" }}
//       camera={{ position: [0, 0, 1], zoom: 800 }}
//     >
//       <directionalLight intensity={3} position={[0, 0.1, 1]} />
//       <Model />
//       <Environment preset="city" />
//     </Canvas>
//   );
// }

"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#000000" }}>
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}