"use client"

import { useState, useEffect, useRef } from "react";
import FeatureBadge from "./FeatureBadge";
import Particles from "../Particles";
import FeatureCard from "./FeatureCard";
import { FeatureType } from "@/types/types";

export default function Services() {
    const [isVisibleInView, setIsVisibleInView] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null); // Añadida tipificación

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

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const getTransitionClass = (delayClass = "") => {
        return `transition-all duration-1000 ease-out transform ${delayClass} ${isVisibleInView ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-8 filter blur-sm"
            }`;
    };

    // FUNCIÓN CORREGIDA: Define la clase col-span
    const getColSpanClass = (colSpan: number | undefined) => {
        switch (colSpan) {
            case 2: return 'md:col-span-2';
            case 3: return 'md:col-span-3';
            default: return 'md:col-span-1';
        }
    };


    const steps: FeatureType[] = [
        {
            title: "Posicionamiento Organico",
            description: "Construimos una marca personal influyente alrededor de tu visión y propósito, para que puedas atraer usuarios, talento e inversión en menos de 60 días",
            image: "/service3.png",
            colSpan: 1
        },
        {
            title: "Sistema de adquisición",
            description: "Creamos un flujo de adquisición que identifica, atrae y convierte a tus usuarios ideales con precisión.Menos ruido, más leads calificados y crecimiento sostenido.",
            image: "/service10.png",
            colSpan: 2
        },
        {
            title: "Landings pages de alta conversión ",
            description: "Tu crecimiento, no tu diseño. Creamos y optimizamos la landing que convierte visitas en usuarios pagos, construida con estándares de startup y pensada para escalar.",
            image: "/service14.png",
            colSpan: 3
        },
    ];

    return (
        <section id="services" className="relative w-full py-20 bg-black overflow-hidden">

            {/* Contenedor de FONDO (Absolute) */}
            <div className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-2000 ${isVisibleInView ? 'opacity-100' : 'opacity-0'}`}>
                {/* Blob de fondo */}
                <div className="absolute bottom-[50%] md:bottom-[30%] left-[-10%] w-[700px] h-[400px] bg-orange-500/30 rounded-full blur-[120px] z-0"></div>

                {/* Partículas */}
                <Particles />
            </div>

            {/* Contenedor de CONTENIDO (Relative + z-10) */}
            <div ref={componentRef} className="relative z-10 px-4 md:px-6">

                {/* Badge */}
                <div className={getTransitionClass("delay-0")}>
                    <FeatureBadge text="Servicios" />
                </div>

                {/* Título */}
                <h3 className={getTransitionClass("delay-200")}>
                    Nuestros servicios para tu crecimiento
                </h3>

                {/* Subtítulo */}
                <h4 className={getTransitionClass("delay-400")}>
                    Todo lo que necesitás para crecer, con simplicidad y enfoque.
                </h4>

                {/* Grid de Tarjetas - CORREGIDO */}
                <div className={`grid md:grid-cols-3 max-w-[1300px] mx-auto gap-10`}>
                    {steps.map((step, index) => (
                        // APLICA EL COL-SPAN AL DIV QUE ES HIJO DIRECTO DEL GRID
                        <div
                            key={index}
                            className={`${getTransitionClass(`delay-${600 + index * 150}`)} ${getColSpanClass(step.colSpan)}`}
                        >
                            <FeatureCard
                                title={step.title}
                                description={step.description}
                                image={step.image}
                            // Se puede eliminar colSpan de aquí, ya que no se usa en FeatureCard
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}