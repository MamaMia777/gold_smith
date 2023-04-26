import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Diamond = () => {
  const diamond = useGLTF("./d2/scene.gltf")
  return (
    <primitive object={diamond.scene} scale={2} position-y={0} rotation-z={1} />
  );
};

const DiamondCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      // dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 0,
        position: [5, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Diamond />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DiamondCanvas;