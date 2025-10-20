import { ChangeEvent, FormEvent, useState } from "react"

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
        listReactValues,
        placeholder,
        value,
        onChange
    }: {
        id: string,
        type: InputType,
        required?: boolean,
        title?: string,
        listValues?: string[],
        listReactValues?: React.ReactNode[],
        placeholder?: string,
        value?: string,
        onChange?(event: ChangeEvent<HTMLInputElement>): void
    }
) {
    const isRadioOrCheckbox = type == InputType.radio || type == InputType.checkbox
    const [radioCheckedValue, setRadioCheckedValueState] = useState("")
    const [isInvalid, setIsInvalid] = useState(false)

    function onChangeEvent(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        if (isRadioOrCheckbox) {
            onChange && onChange(event as ChangeEvent<HTMLInputElement>)

            setRadioCheckedValueState(event.target.getAttribute('id') ?? "")
        }

        setIsInvalid(false)

        return
    }

    function onInvalid() {
        setIsInvalid(true)
    }

    function input(defaultValue?: string): React.ReactNode {
        return <input
            onChange={onChangeEvent}
            onInvalid={onInvalid}
            required={required}
            type={type}
            name={id}
            id={isRadioOrCheckbox ? defaultValue : id}
            checked={type == InputType.checkbox ? undefined : (radioCheckedValue === "" ? value : radioCheckedValue) === defaultValue}
            value={defaultValue}
            defaultValue={isRadioOrCheckbox ? undefined : value}
            className="bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
            placeholder={placeholder}
        />
    }

    function formInputBody() {
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
                                <div key={id} className="w-full flex flex-row gap-2 place-items-center">
                                    {
                                        input(element)
                                    }
                                    <label htmlFor={element}>
                                        {
                                            (listReactValues && listReactValues[id]) ?? element
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
                    <select
                        id={id}
                        name={id}
                        defaultValue={value}
                        required={required}
                        onInvalid={onInvalid}
                        onChange={onChangeEvent}
                        className="appearance-none p-3 bg-transparent placeholder:text-gray-400 border border-gray-100 rounded-2xl px-3 py-4 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
                    >
                        <option value="">
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

    return <div className="flex flex-col gap-2">
        {
            formInputBody()
        }

        {
            isInvalid
                ? <div className="text-red-600 text-sm ps-3">
                    Dieses Feld ist verpflichtend.
                </div>
                : <div></div>
        }
    </div>
}