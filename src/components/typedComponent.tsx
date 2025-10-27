"use client";

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypedComponent(
    {
        words,
        className,
    }: {
        words: string[],
        className?: string,
    }
) {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: words,
            typeSpeed: 100,
            backSpeed: 75,
            backDelay: 3000,
            loop: true,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return <div>
        <span ref={el} className={className} />
    </div>
}