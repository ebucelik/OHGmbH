"use client";

import { ReactNode } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxComponent(
    {
        speed,
        children
    }: {
        speed: number,
        children: ReactNode
    }
) {
    return <ParallaxProvider>
        <Parallax speed={speed}>
            {
                children
            }
        </Parallax>
    </ParallaxProvider>
}