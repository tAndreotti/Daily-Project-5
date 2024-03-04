// import {
//   useGLTF,
//   Float,
//   MeshTransmissionMaterial,
// } from "@react-three/drei";
// import React from "react";
// import { useThree } from "@react-three/fiber";
// import { useControls } from "leva";

// export default function Model() {
//   const { viewport } = useThree();
//   const { nodes } = useGLTF("/medias/hexis.glb");

//   return (
//     <group scale={viewport.width / 1.5}>
//       {/* <Mesh data={nodes} key={1} />; */}
//       {nodes.Scene.children.map((mesh, i) => {
//         return <Mesh data={mesh} key={i} />;
//       })}
//     </group>
//   );
// }

// function Mesh({ data }) {
//   // const materialProps = useControls({
//   //   thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
//   //   ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
//   //   chromaticAberration: { value: 0.75, min: 0, max: 1 },
//   //   resolution: { value: 300 },
//   // });

//   return (
//     // <Float>
//     <mesh {...data}>
//       <meshBasicMaterial />
//         {/* <MeshTransmissionMaterial
//           roughness={0}
//           transmission={0.99}
//           {...materialProps}
//         /> */}
//       </mesh>
//     // </Float>
//   );
// }

import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/hexis.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/fonts/PPNeueMontreal-Regular.ttf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}