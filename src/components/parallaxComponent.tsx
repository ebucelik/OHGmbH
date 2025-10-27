"use client";

import { ReactNode } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxComponent(
    {
        translateYStart,
        translateYEnd,
        className,
        scaleStart,
        scaleEnd,
        opacityStart,
        opacityEnd,
        children
    }: {
        translateYStart?: number,
        translateYEnd?: number,
        className?: string,
        scaleStart?: number,
        scaleEnd?: number,
        opacityStart?: number,
        opacityEnd?: number,
        children: ReactNode
    }
) {
    return <ParallaxProvider>
        <Parallax
            translateY={[translateYStart ?? 0, translateYEnd ?? 0]}
            className={className}
            easing="ease"
            scale={[scaleStart ?? 1, scaleEnd ?? 1]}
            opacity={[opacityStart ?? 1, opacityEnd ?? 1]}
            shouldDisableScalingTranslations
        >
            {
                children
            }
        </Parallax>
    </ParallaxProvider>
}