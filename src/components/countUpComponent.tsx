"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CountUpComponent(
    {
        countEnd,
        className
    }: {
        countEnd: number,
        className: string
    }
) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return <div ref={ref}>
        {
            inView
                ? <CountUp duration={5} start={0} end={countEnd} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} className={className} />
                        </div>
                    )}
                </CountUp>
                : null
        }
    </div>
}