"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import { ReactNode } from "react";

export default function SliderComponent({ children }: { children: ReactNode[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 6000 })])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {
                    children.map((item, key) => {
                        return <div className="embla__slide p-2 sm:p-5" key={key}>
                            {
                                item
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}