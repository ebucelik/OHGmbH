"use client";

import { ReactNode, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxComponent(
    {
        speed,
        translateXStart,
        translateXEnd,
        translateYStart,
        translateYEnd,
        className,
        scaleStart,
        scaleEnd,
        opacityStart,
        opacityEnd,
        children
    }: {
        speed?: number,
        translateXStart?: number,
        translateXEnd?: number,
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

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(innerWidth <= 600)
    })

    const isTranslateXAvailable = (translateXStart != undefined || translateXEnd != undefined)
    const isTranslateYAvailable = (translateYStart != undefined || translateYEnd != undefined)

    return <div>
        {
            isMobile
                ? children
                : <Parallax
                    speed={speed}
                    translateX={isTranslateXAvailable ? [translateXStart ?? 0, translateXEnd ?? 0] : undefined}
                    translateY={isTranslateYAvailable ? [translateYStart ?? 0, translateYEnd ?? 0] : undefined}
                    className={className}
                    scale={[scaleStart ?? 1, scaleEnd ?? 1]}
                    opacity={[opacityStart ?? 1, opacityEnd ?? 1]}
                    shouldDisableScalingTranslations
                >
                    {
                        children
                    }
                </Parallax>
        }
    </div>
}