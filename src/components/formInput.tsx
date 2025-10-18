import { ChangeEvent, useState } from "react"

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
        id,
        type,
        required,
        title,
        listValues,
        placeholder,
        value,
        onChange
    }: {
        id: string,
        type: InputType,
        required?: boolean,
        title?: string,
        listValues?: string[],
        placeholder?: string,
        value?: string,
        onChange?(event: ChangeEvent<HTMLInputElement>): void
    }
) {
    const isRadioOrCheckbox = type == InputType.radio || type == InputType.checkbox
    const [radioCheckedValue, setRadioCheckedValueState] = useState("")

    function onChangeEvent(event: ChangeEvent<HTMLInputElement>) {
        if (isRadioOrCheckbox) {
            onChange && onChange(event)

            setRadioCheckedValueState(event.target.getAttribute('id') ?? "")
        }

        return
    }

    function input(defaultValue?: string): React.ReactNode {
        return <input
            onChange={onChangeEvent}
            required={required}
            type={type}
            name={id}
            id={isRadioOrCheckbox ? defaultValue : id}
            checked={(radioCheckedValue === "" ? value : radioCheckedValue) === defaultValue}
            value={defaultValue}
            defaultValue={isRadioOrCheckbox ? undefined : value}
            className="bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
            placeholder={placeholder}
        />
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
                                {
                                    input(element)
                                }
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
                <label htmlFor={id}>
                    {
                        title + (required == true ? " *" : "")
                    }
                </label>
                <select id={id} name={id} defaultValue={value} className="appearance-none p-3 bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow">
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
                    input()
                }
            </div>
    }
}