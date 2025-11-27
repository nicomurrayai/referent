"use client";

import { useState, useEffect, useRef } from "react";
import FeatureBadge from "./FeatureBadge";
import Particles from "../Particles";
import BenefitCard from "./BenefitCard";

// ⬅️ Importá los íconos de Lucide
import { Zap, Rocket, ShieldCheck, Timer } from "lucide-react";

export default function Benefits() {
    const [isVisibleInView, setIsVisibleInView] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (componentRef.current) observer.observe(componentRef.current);

        return () => {
            if (componentRef.current) observer.unobserve(componentRef.current);
        };
    }, []);

    const getTransitionClass = (delayClass = "") => {
        return `
            transition-all duration-1000 ease-out transform 
            ${delayClass} 
            ${isVisibleInView
                ? "opacity-100 translate-y-0 filter blur-0"
                : "opacity-0 translate-y-8 filter blur-sm"}
        `;
    };

    // ⬅️ Ahora los beneficios usan íconos Lucide
    const benefits = [
        {
            title: "Productividad multiplicada",
            description: "Simplificamos tu proceso de creación y te damos un sistema claro para producir contenido sin fricción. Más piezas, más calidad, menos esfuerzo.",
            icon: Timer,
        },
        {
            title: "Posicionamiento acelerado",
            description: "Instalamos un sistema de narrativa y contenido que te convierte en referente de tu industria. Atraés usuarios, oportunidades y contactos clave sin perseguir nada.",
            icon: Rocket,
        },
        {
            title: "Crecimiento predecible",
            description: "Optimizamos tu presencia, tus landings y tu contenido para que cada mes mejores tus métricas. Más alcance, más leads y más claridad para escalar.",
            icon: ShieldCheck,
        }
    ];

    return (
        <section id="benefits" className="relative w-full py-20 bg-black overflow-hidden">

            {/* Fondo con partículas */}
            <div
                className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-2000 
                ${isVisibleInView ? "opacity-100" : "opacity-0"}`}
            >
                <Particles />
            </div>

            {/* Contenido */}
            <div ref={componentRef} className="relative z-10 px-4 md:px-6">

                {/* Badge */}
                <div className={getTransitionClass("delay-0")}>
                    <FeatureBadge text="Beneficios" />
                </div>

                {/* Título */}
                <h3 className={getTransitionClass("delay-200")}>
                    Maxima eficiencia e impacto
                </h3>

                {/* Subtítulo */}
                <h4
                    className={`text-lg md:text-xl text-gray-400 text-center mb-12 ${getTransitionClass(
                        "delay-400"
                    )}`}
                >
                    Todos los beneficios de trabajar con nosotros.
                </h4>

                {/* Grid de Tarjetas */}
                <div className={`grid md:grid-cols-3 max-w-[1300px] mx-auto gap-10`}>
                    {benefits.map((b, i) => (
                        <div key={b.title} className={getTransitionClass(`delay-${200 * i}`)}>
                            <BenefitCard
                                icon={b.icon}
                                title={b.title}
                                description={b.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
