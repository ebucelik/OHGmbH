"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

type RouteMatch = { keywords: string[]; href: string };

const routeMatches: RouteMatch[] = [
    { keywords: ["lkw", "lastwagen", "laster"], href: "/insurance/lkw" },
    { keywords: ["motorrad", "biker", "töff", "toff"], href: "/insurance/motorcycle" },
    { keywords: ["moped", "roller"], href: "/insurance/moped" },
    { keywords: ["auto", "pkw", "kfz", "fahrzeug", "wagen"], href: "/insurance/car" },
    { keywords: ["eigenheim", "haus ", "hausversicherung", "immobilie"], href: "/insurance/ownhome" },
    { keywords: ["haushalt", "wohnung"], href: "/insurance/flat" },
    { keywords: ["rechtsschutz", "anwalt", "rechtsstreit"], href: "/insurance/law" },
    { keywords: ["unfall"], href: "/insurance/accident" },
    { keywords: ["umschuldung"], href: "/finance/debtrestructing" },
    { keywords: ["wohnbaukredit", "kredit", "finanzierung"], href: "/finance/homecredit" },
    { keywords: ["gewinnfreibetrag"], href: "/investment/profitallowance" },
    { keywords: ["investment", "anlage", "vermögen", "vermogen"], href: "/investment/investmentservice" },
];

function findRoute(text: string): string | null {
    const normalized = text.toLowerCase();

    for (const match of routeMatches) {
        if (match.keywords.some((keyword) => normalized.includes(keyword))) {
            return match.href;
        }
    }

    return null;
}

export default function PromptInput() {
    const [value, setValue] = useState("");
    const router = useRouter();

    function submit() {
        const trimmed = value.trim();

        if (!trimmed) {
            router.push("/contact");
            return;
        }

        const matchedRoute = findRoute(trimmed);

        router.push(matchedRoute ?? `/contact?note=${encodeURIComponent(trimmed)}`);
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            event.preventDefault();
            submit();
        }
    }

    return (
        <div className="w-full max-w-xl px-4">
            <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition-shadow duration-300 focus-within:border-appPrimary/60 focus-within:shadow-[0_8px_40px_rgba(225,185,100,0.35)] sm:px-4 sm:py-3">
                <Icon icon="material-symbols:auto-awesome-rounded" className="h-5 w-5 shrink-0 text-appPrimary sm:h-6 sm:w-6" />

                <input
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Wobei dürfen wir dir helfen? z. B. „Ich möchte mein Auto versichern“"
                    className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-base"
                />

                <button
                    type="button"
                    onClick={submit}
                    aria-label="Anfrage senden"
                    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-appPrimary text-neutral-900 transition duration-300 hover:brightness-95 sm:h-10 sm:w-10"
                >
                    <Icon icon="material-symbols:arrow-upward-rounded" className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
            </div>
        </div>
    );
}
