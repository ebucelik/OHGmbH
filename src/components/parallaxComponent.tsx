"use client";

import { ReactNode, useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxComponent(
    {
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

    return <div>
        {
            isMobile
                ? children
                : <Parallax
                    translateX={translateXStart == undefined && translateXEnd == undefined ? undefined : [translateXStart ?? 0, translateXEnd ?? 0]}
                    translateY={translateYStart == undefined && translateYEnd == undefined ? undefined : [translateYStart ?? 0, translateYEnd ?? 0]}
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