import { Icon } from "@iconify/react"
import Link from "next/link";

export default function Button(
    {
        text,
        iconName,
        isSubmit,
        className,
        onClick,
        href,
        isPrimary
    }: {
        text: String,
        iconName?: string,
        isSubmit?: boolean,
        className?: String,
        onClick?: () => void,
        href?: string,
        isPrimary: boolean
    }
) {
    return (
        href != undefined && href != ""
            ?
            <div className="decoration-0 sm:max-w-2/3">
                <Link href={`${href}`}>
                    {
                        iconName != "" && iconName != undefined ? <div
                            className={`${isPrimary ? 'bg-appPrimary hover:bg-appPrimaryLight' : 'text-white bg-appSecondary hover:bg-appSecondaryLight'}  flex flex-row gap-2 place-items-center text-sm lg:text-2xl font-bold text-center place-content-center p-3 border border-gray-300 rounded-2xl hover:border transition delay-75 duration-200 ease-in cursor-pointer ${className}`}>
                            <div>
                                <Icon icon={iconName ?? ""} />
                            </div>

                            <div>
                                {text}
                            </div>
                        </div> : <div
                            className={`${isPrimary ? 'bg-appPrimary hover:bg-appPrimaryLight' : 'text-white bg-appSecondary hover:bg-appSecondaryLight'} text-sm lg:text-2xl font-bold text-center place-content-center p-3 border border-gray-300 rounded-2xl hover:border transition delay-75 duration-200 ease-in cursor-pointer ${className}`}>
                            {text}
                        </div>
                    }
                </Link>
            </div >
            : <button type={isSubmit ? "submit" : "button"} className="decoration-0 max-w-2/3" onClick={onClick}>
                {
                    iconName != "" && iconName != undefined ? <div
                        className={`${isPrimary ? 'bg-appPrimary hover:bg-appPrimaryLight' : 'text-white bg-appSecondary hover:bg-appSecondaryLight'}  flex flex-row gap-2 place-items-center text-sm lg:text-2xl font-bold text-center place-content-center p-3 border border-gray-300 rounded-2xl hover:border transition delay-75 duration-200 ease-in cursor-pointer ${className}`}>
                        <Icon icon={iconName ?? ""} />

                        <div>
                            {text}
                        </div>
                    </div> : <div
                        className={`${isPrimary ? 'bg-appPrimary hover:bg-appPrimaryLight' : 'text-white bg-appSecondary hover:bg-appSecondaryLight'} text-sm lg:text-2xl font-bold text-center place-content-center p-3 border border-gray-300 rounded-2xl hover:border transition delay-75 duration-200 ease-in cursor-pointer ${className}`}>
                        {text}
                    </div>
                }
            </button>
    );
}