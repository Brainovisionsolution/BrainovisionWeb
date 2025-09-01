// src/components/RobotModel.tsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export function RobotModel(props: any) {
  const { scene } = useGLTF("/models/robo_v1.glb");
  return <primitive object={scene} scale={1.5} {...props} />;
}
