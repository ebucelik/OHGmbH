"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/oh-gmbh-logo.glb");
    return <primitive object={scene} />;
}

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center className="text-sm text-neutral-500">
            {Math.round(progress)}% geladen
        </Html>
    );
}

export default function Logo3D() {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <directionalLight position={[-5, -3, -5]} intensity={0.6} />
                <Suspense fallback={<Loader />}>
                    <Bounds fit clip observe margin={1.2}>
                        <Model />
                    </Bounds>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1.5} makeDefault />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/oh-gmbh-logo.glb");
