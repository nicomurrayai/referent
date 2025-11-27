"use client"

import { useState, useEffect, useRef } from "react";
import FeatureBadge from "./FeatureBadge";
import Particles from "../Particles";
import FeatureCard from "./FeatureCard";

export default function Process() {
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

    const steps = [
        {
            title: "Descubrimiento & análisis",
            description: "Analizamos tu marca, tu audiencia y tus objetivos para definir una dirección clara y un posicionamiento sólido.",
            image: "/process1.png",
        },
        {
            title: "Desarrollo & Optimización",
            description: "Creamos los activos clave —contenido, branding y landings de alta conversión— y los optimizamos para maximizar resultados.",
            image: "/process2.png",
        },
        {
            title: "Lanzamiento & Escala",
            description: "Implementamos, medimos y ajustamos tu sistema para sostener el crecimiento y escalar tu presencia con consistencia.",
            image: "/process3.png",
        },
    ];

    return (
        // CAMBIO 1: Usamos un section 'relative' en lugar de un fragmento '<>'
        <section id="process" className="relative w-full py-20 bg-black overflow-hidden">
            
            {/* CAMBIO 2: Contenedor de FONDO (Absolute) */}
            {/* Usamos inset-0 para que cubra exactamente este componente */}
            <div className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-2000 ${isVisibleInView ? 'opacity-100' : 'opacity-0'}`}>
                {/* Blobs corregidos (left-[1%] en vez de left[1%]) */}
                <div className=" absolute bottom-[50%]  md:bottom-[30%] right-[-10%] w-[700px] h-[400px] bg-orange-500/30 rounded-full blur-[120px] z-0"></div>
                
                {/* Las partículas ahora viven dentro de este contenedor absoluto */}
                <Particles />
            </div>

            {/* CAMBIO 3: Contenedor de CONTENIDO (Relative + z-10) */}
            {/* z-10 asegura que el texto y las tarjetas estén SOBRE las partículas */}
            <div ref={componentRef} className="relative z-10 px-4 md:px-6">
                
                {/* Badge */}
                <div className={getTransitionClass("delay-0")}>
                    <FeatureBadge text="Nuestro proceso" />
                </div>

                {/* Título */}
                <h3 className={getTransitionClass("delay-200")}>
                    Tu paso a la autoridad.
                </h3>

                {/* Subtítulo */}
                <h4 className={`text-lg md:text-xl text-gray-400 text-center mb-12 ${getTransitionClass("delay-400")}`}>
                    Un método simple, claro y eficaz para posicionarte y convertir mejor.
                </h4>

                {/* Grid de Tarjetas */}
                <div className={`grid md:grid-cols-3 max-w-[1300px] mx-auto gap-10`}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={getTransitionClass(`delay-${600 + index * 150}`)}
                        >
                            <FeatureCard
                                title={step.title}
                                description={step.description}
                                image={step.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}