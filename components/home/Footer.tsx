"use client";

import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Input } from "../ui/input";
import { Check, CircleCheck, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {

    const [sended, setSended] = useState(false);

    const handleSubmit = () => {
        setSended(true);
    };

    return (
        <div className="relative">
            {/* Script de Beehiiv */}
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>

            {/* Iframe de Beehiiv corregido para JSX */}
            <div id="newsletter" className="w-full flex justify-center mt-10">
                <iframe
                    src="https://subscribe-forms.beehiiv.com/4daf3ffb-afcc-4e2c-82f7-1dc3403f00f3"
                    className="beehiiv-embed"
                    data-test-id="beehiiv-embed"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                        width: "60%",
                        height: "315px",
                        margin: 0,
                        borderRadius: "0px",
                        backgroundColor: "transparent",
                        boxShadow: "0 0 #0000",
                        maxWidth: "100%",
                    }}
                ></iframe>
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] h-[100px] md:w-[500px] md:h-[100px] lg:h-[100px] lg:w-[700px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0 opacity-100"></div>

            <div className="max-w-[1300px] mx-auto py-20 border-t border-white/20 relative px-4">

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 relative z-10">
                    <div className="max-w-md">
                        <div>
                            <div className="max-w-md">
                                <p className="text-xl md:text-2xl font-bold mb-2">Secciones</p>
                                <p className="text-xs md:text-sm text-white/80 flex flex-col gap-3">
                                    <Link href="#">Procesos</Link>
                                    <Link href="#">Servicios</Link>
                                    <Link href="#">Beneficios</Link>
                                    <Link href="#">Testimonios</Link>
                                    <Link href="#">Contacto</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left md:text-right max-w-md">
                        <p className="text-lg md:text-xl font-bold mb-2">Seguinos en nuestras redes</p>
                        <p className="text-sm md:text-base text-white/80">
                            Enterate de cómo trabajamos y nuestras propuestas
                        </p>
                        <div className="flex items-center mt-4 gap-10 justify-end">
                            matias@referent.site
                            <Link target="_blank" href="https://www.instagram.com/matinogueraa/"><FaInstagram className="size-6 cursor-pointer" /></Link>
                            <Link target="_blank" href="https://www.linkedin.com/company/referente-media?trk=public_profile_topcard-current-company"><FaLinkedin className="size-6 cursor-pointer" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
