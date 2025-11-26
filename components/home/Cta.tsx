"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Particles from "../Particles";

export default function Cta() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    // OBSERVA CUANDO ENTRA AL VIEWPORT
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    // MISMA FUNCIÓN DE ANIMACIÓN QUE EN HERO
    const getTransitionClass = (delay = "") => {
        return `
            transition-all duration-1000 ease-out transform ${delay}
            ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"}
        `;
    };

    return (
        <div ref={ref} className="flex flex-col items-center justify-center my-40 relative px-2">

            <Particles />

            {/* ORB CENTRAL */}
            <div
                className={`
                absolute inset-0 m-auto
                w-[250px] h-[250px]
                md:w-[300px] md:h-[300px]
                bg-orange-500/80 rounded-full blur-[150px]
                pointer-events-none
                transition-all duration-1500 ease-out
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
            ></div>

            {/* TÍTULO */}
            <p className={
                "text-3xl md:text-6xl text-center relative z-10 font-medium leading-snug " +
                getTransitionClass("delay-100")
            }>
                Hablemos de tu próximo <br /> gran movimiento
            </p>

            {/* SUBTÍTULO */}
            <p
                className={
                    "text-sm md:text-2xl text-center mt-6 relative z-10 " +
                    getTransitionClass("delay-200")
                }
            >
                Coordinemos una breve llamada de descubrimiento <br />
                para ver cuáles de los servicios acelerarán tu crecimiento.
            </p>

            {/* CTA BUTTON */}
            <div
                className={
                    "relative z-10 " + getTransitionClass("delay-300")
                }
            >
                <Link target="_blank" href="https://calendly.com/matiasnoguera">
                    <Button className="mt-12">
                        Agendar una llamada <ArrowUpRight />
                    </Button>
                </Link>

                <p className="text-center text-white/70 mt-4">
                    Es gratis.
                </p>
            </div>

        </div>
    );
}
