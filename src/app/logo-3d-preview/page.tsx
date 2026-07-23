"use client";

import Logo3D from "../../components/logo3d";

export default function Logo3DPreview() {
    return (
        <div className="pt-28 sm:pt-30">
            <div className="mx-auto max-w-4xl px-5 pb-10 text-center">
                <div className="text-2xl font-bold sm:text-4xl">3D-Logo Vorschau</div>
                <div className="mt-2 text-neutral-600">
                    Nur zu Testzwecken - mit der Maus drehen und zoomen.
                </div>
            </div>
            <div className="mx-auto h-[70vh] max-w-4xl px-5">
                <Logo3D />
            </div>
        </div>
    );
}
