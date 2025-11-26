"use client"

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button"; // Asegúrate que esta ruta sea correcta en tu proyecto
import Navbar from "./Navbar";     // Asegúrate que esta ruta sea correcta
import Particles from "../Particles"; // Asegúrate que esta ruta sea correcta
import Link from "next/link";

export default function Hero() {

    const WORDS = ["Contenido.", "Estrategia.", "Landings."];

    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // 1. Nuevo estado para controlar la animación de entrada inicial
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // 2. Activamos la animación apenas se monta el componente
        setMounted(true);

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
                setIsVisible(true);
            }, 500);
        }, 1900);

        return () => clearInterval(interval);
    }, []);

    // Helper para no repetir clases largas (Transición suave + Opacidad + Desplazamiento)
    const getTransitionClass = (delayClass = "") => {
        return `transition-all duration-1000 ease-out transform ${delayClass} ${mounted ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-8 filter blur-sm"
            }`;
    };

    return (
        <div className="relative w-full pb-30 bg-black text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">

            {/* --- FONDO Y EFECTOS --- */}
            {/* Agregamos una transición lenta al fondo también para que no aparezca de golpe */}
            <div className={`transition-opacity duration-2000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-[10%] left[1%] h-[280px] md:top-[-10%] md:left-[-10%] w-[60%] md:h-[150px] bg-orange-500/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="hidden md:block absolute bottom-[20%] right-[-10%] w-[700px] h-[400px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <Particles />
            </div>

            {/* --- CONTENIDO --- */}
            <div className="relative z-10">

                {/* Navbar con delay inicial */}
                <div className={getTransitionClass("delay-0")}>
                    <Navbar />
                </div>

                <div className="mt-15 md:mt-20 flex flex-col items-center justify-center px-4">

                    {/* Badge - Delay 100ms */}
                    <div className={getTransitionClass("delay-100")}>
                        <span className="shadow-gray-400 shadow text-white text-xs md:text-base font-medium px-3 py-1 rounded-full bg-black/40 mb-6 inline-block">
                            200M VIEWS
                        </span>
                    </div>

                    {/* Título Principal - Delay 200ms */}
                    <h1 className={`text-center text-4xl md:text-6xl tracking-tight text-white/80 leading-tight ${getTransitionClass("delay-200")}`}>
                        Posicionando <br className="md:hidden" />CEOs y Startups <br />
                        con{' '}
                        {/* Contenedor con ancho fijo para evitar el reflow */}
                        <span className="inline-block min-w-[150px] md:min-w-[280px]">
                            {/* Palabra Dinámica */}
                            <span
                                className={`inline-block transition-all duration-500 ease-in-out bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-orange-950
                                ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'}`}
                            >
                                {WORDS[index]}
                            </span>
                        </span>
                    </h1>

                    {/* Subtítulo - Delay 300ms */}
                    <h2 className={`text-lg md:text-xl text-gray-400 mt-6 text-center font-light ${getTransitionClass("delay-300")}`}>
                        Instalamos sistemas de posicionamiento <br className="md:hidden" />que atraen <strong className="text-white font-semibold"> usuarios, talento e inversión.</strong>
                    </h2>

                    {/* Botones - Delay 500ms */}
                    <div className={`flex items-center gap-4 mt-10 ${getTransitionClass("delay-500")}`}>
                        <Link target="_blank" href="https://calendly.com/matiasnoguera">
                            <Button>Quiero Posicionarme <ArrowUpRight className="w-4 h-4 ml-1" /></Button>
                        </Link>

                        <Button variant="outline" className="bg-white/5 hover:bg-transparent hover:text-white">
                            Ver en acción
                        </Button>
                    </div>

                    {/* Logos - Delay 700ms */}
                    <div className={`overflow-hidden w-[80%] md:w-[400px] mx-auto mt-15 text-gray-400 rounded-full ${getTransitionClass("delay-700")}`}>
                        <div className="scroll-container flex gap-8 items-center">
                            <span className="text-xl font-bold">PHILIPS</span>
                            <span className="text-xl font-bold">Allianz</span>
                            <span className="text-xl font-bold">LaCarta!</span>
                            <span className="text-xl font-bold">Vippin</span>
                            <span className="text-xl font-bold">Pixelarios</span>

                            {/* Duplicado para el loop infinito */}
                            <span className="text-xl font-bold">PHILIPS</span>
                            <span className="text-xl font-bold">Allianz</span>
                            <span className="text-xl font-bold">LaCarta!</span>
                            <span className="text-xl font-bold">Vippin</span>
                            <span className="text-xl font-bold">Pixelarios</span>

                            {/* Duplicado para el loop infinito */}
                            <span className="text-xl font-bold">PHILIPS</span>
                            <span className="text-xl font-bold">Allianz</span>
                            <span className="text-xl font-bold">LaCarta!</span>
                            <span className="text-xl font-bold">Vippin</span>
                            <span className="text-xl font-bold">Pixelarios</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}