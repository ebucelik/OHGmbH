export enum InputType {
    checkbox = "checkbox",
    radio = "radio",
    number = "number",
    text = "text",
    email = "email",
    tel = "tel",
    list = "list"
}

export default function FormInput(
    {
        type,
        required,
        title,
        listValues,
        placeholder
    }: {
        type: InputType,
        required?: boolean,
        title?: string,
        listValues?: string[],
        placeholder?: string
    }
) {

    function input(id: string): React.ReactNode {
        if (required == true) {
            return <input required type={type.valueOf()} id={id} name={type.valueOf()} className="bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow" placeholder={placeholder} />
        } else {
            return <input type={type.valueOf()} id={id} name={type.valueOf()} className="bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow" placeholder={placeholder} />
        }
    }

    switch (type) {
        case InputType.checkbox:
        case InputType.radio:
            return <div className="flex flex-col gap-2">
                {
                    title != undefined ? title + (required == true ? " *" : "") : ""
                }

                {
                    listValues?.map((element, id) => {
                        return (
                            <div key={id} className="w-full max-w-sm min-w-[200px] flex flex-row gap-2 place-items-center">
                                <div>
                                    {
                                        input(element)
                                    }
                                </div>
                                <label htmlFor={element}>
                                    {
                                        element
                                    }
                                </label>
                            </div>
                        )
                    })
                }
            </div>

        case InputType.list:
            return <div className="w-full max-w-sm min-w-[200px] flex flex-col gap-2">
                <label htmlFor={title}>
                    {
                        title + (required == true ? " *" : "")
                    }
                </label>
                <select id={title} name={title} className="appearance-none p-3 bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow">
                    <option defaultValue={"Bitte auswählen"}>
                        Bitte auswählen
                    </option>
                    {
                        listValues?.map((element, id) => {
                            return (
                                <option key={id} value={element}>
                                    {element}
                                </option>
                            )
                        })
                    }
                </select>
            </div>

        default:
            return <div className="w-full max-w-sm min-w-[200px] flex flex-col gap-2">
                <label htmlFor={title}>{
                    title + (required == true ? " *" : "")
                }</label>
                {
                    input(title || "")
                }
            </div>
    }
}