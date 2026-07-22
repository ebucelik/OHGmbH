"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type FaqItem = {
    question: string;
    answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col gap-3">
            {items.map((item, index) => {
                const open = openIndex === index;
                return (
                    <div
                        key={item.question}
                        className={`rounded-2xl border transition-colors duration-300 ${open ? "border-appPrimary/40 bg-appPrimaryLight/30" : "border-gray-200 bg-white"}`}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(open ? null : index)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                        >
                            <span className="text-base sm:text-lg font-bold">
                                {item.question}
                            </span>
                            <Icon
                                icon="material-symbols:keyboard-arrow-down-rounded"
                                className={`h-6 w-6 shrink-0 text-appPrimary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </button>
                        {open && (
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-neutral-600 fade-in-05s">
                                {item.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
