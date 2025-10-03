import { ReactElement } from "react";

export default function HCarousel(
    {
        leadingTitle,
        items,
        outerDivClassName,
        innerDivClassName }: {
            leadingTitle?: String,
            outerDivClassName?: String,
            innerDivClassName?: String,
            items: ReactElement[]
        }
) {
    return (
        <div className="flex place-content-center my-15 mx-5 sm:mx-10">
            <div className={`flex flex-row w-full sm:w-1/2 ${outerDivClassName}`}>
                <div className="whitespace-nowrap font-bold place-content-center">
                    {leadingTitle}
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                    <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ${innerDivClassName}`}>
                        {
                            items
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}