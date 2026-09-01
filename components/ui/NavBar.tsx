"use client";

import { useState } from "react";
import Image from "next/image";


export default function NavBar() {
    const [open, setOpen] = useState(false);


    return (
        <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-2">

                {/* LOGO */}
                <Image src="/images/logo.svg" alt="Logo" width={200} height={200} className="cursor-pointer" />
                <a
                    href="https://maps.google.com/?cid=3290012523000835990&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/images/Map.svg" alt="Logo" width={20} height={20} className="cursor-pointer" />
                </a>


                {/* DESKTOP MENU */}
                <nav className="hidden md:flex gap-6 font-medium text-sm">
                    <a href="tel:+380668029054">
                        <p>+380 <span className="text-red-600 text-lg font-bold">[</span> 066 <span className="text-red-600 text-lg font-bold">]</span> 802-90-54</p>
                    </a>
                </nav>

            </div>

        </header>
    );
}