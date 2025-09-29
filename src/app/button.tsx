export default function Button({ text }: { text: String }) {
    return (
        <a href="" className="decoration-0 max-w-1/2">
            <div
                className="font-bold text-center place-content-center p-3 my-5 border-1 border-gray-300 bg-appPrimary rounded-md hover:border-1 hover:bg-appPrimaryLight transition delay-75 duration-200 ease-in cursor-pointer">
                <h4 className="text-sm lg:text-2xl">{text}</h4>
            </div>
        </a>
    );
}