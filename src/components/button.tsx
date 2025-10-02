import Link from "next/link";

export default function Button(
    { text, className, isPrimary }: { text: String, className?: String, isPrimary: boolean }
) {
    return (
        <Link href="" className="decoration-0 max-w-2/3">
            <div
                className={`${isPrimary ? 'bg-appPrimary hover:bg-appPrimaryLight' : 'text-white bg-appSecondary hover:bg-appSecondaryLight'} text-sm lg:text-2xl font-bold text-center place-content-center p-3 border-1 border-gray-300 rounded-md hover:border-1 transition delay-75 duration-200 ease-in cursor-pointer ${className}`}>
                {text}
            </div>
        </Link>
    );
}