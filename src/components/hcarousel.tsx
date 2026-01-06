import { ReactElement } from "react";

export default function HCarousel(
    {
        leadingTitle,
        items,
        className,
        outerDivClassName,
        innerDivClassName
    }: {
        leadingTitle?: String,
        className?: String,
        outerDivClassName?: String,
        innerDivClassName?: String,
        items: ReactElement[]
    }
) {
    return (
        <div className={`${className} flex place-content-center mx-5 sm:mx-10`}>
            <div className={`flex flex-col sm:flex-row w-full sm:w-1/2 ${outerDivClassName}`}>
                <div className="whitespace-nowrap font-bold sm:place-content-center">
                    {leadingTitle}
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                    <ul className={`flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll ${innerDivClassName}`}>
                        {
                            items
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}