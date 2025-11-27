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
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] h-[100px] md:w-[500px] md:h-[100px] lg:h-[100px] lg:w-[700px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0 opacity-100"></div>

            <div className="max-w-[1300px] mx-auto py-20 border-t border-white/20 relative px-4">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 relative z-10">
                    <div className="max-w-md">
                        <p className="text-xl md:text-2xl font-bold mb-2">Crezcamos Juntos</p>
                        <p className="text-sm md:text-base text-white/80">
                            Suscribite al Newsletter para obtener beneficios exclusivos
                        </p>

                        <div className="mt-4 w-[80%] max-w-sm transition-colors duration-300 rounded-lg flex items-center gap-2">
                            <Input
                                disabled={sended}
                                placeholder="Ingresar email"
                                className="bg-white/10 border-none pr-10 text-base"
                            />

                            <Button
                                disabled={sended}
                                onClick={handleSubmit}
                                className={`${sended ? "bg-green-500 hover:bg-green-600" : ""}`}
                            >
                                {sended ? <Check /> : <Send />}
                            </Button>
                        </div>
                    </div>

                    <div className="text-left md:text-right max-w-md">
                        <p className="text-lg md:text-xl font-bold mb-2">Seguinos en nuestras redes</p>
                        <p className="text-sm md:text-base text-white/80">
                            Enterate de cómo trabajamos y nuestras propuestas
                        </p>
                        <div className="flex items-center mt-4 gap-10 justify-end">
                            <Link target="_blank" href="https://www.instagram.com/matinogueraa/"><FaInstagram className="size-6 cursor-pointer" /></Link>
                            <Link target="_blank" href="https://www.linkedin.com/company/referente-media?trk=public_profile_topcard-current-company"><FaLinkedin className="size-6 cursor-pointer" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
