"use client"

import { useState, useEffect, useRef } from "react"; // Importar hooks necesarios, incluyendo useRef
import FeatureBadge from "./FeatureBadge";
import ProccessCard from "./ProcessCard";




export default function Process() {
    // 1. Estado para controlar si el componente es visible en el viewport
    const [isVisibleInView, setIsVisibleInView] = useState(false);
    // 2. Referencia para adjuntar al elemento DOM y observarlo
    const componentRef = useRef(null);

    // 3. Efecto para activar el Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si el componente entra en la vista (isIntersecting es true)
                if (entry.isIntersecting) {
                    setIsVisibleInView(true);
                    // Dejar de observar una vez que la animación se activa
                    observer.unobserve(entry.target);
                }
            },
            // Opciones del observer: el 10% del elemento debe ser visible para disparar
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        // Limpieza: detener la observación al desmontar el componente
        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []); // Se ejecuta solo una vez al montar

    // 4. Helper para la transición (ahora usa isVisibleInView)
    const getTransitionClass = (delayClass = "") => {
        // La animación ocurre si 'isVisibleInView' es true
        return `transition-all duration-1000 ease-out transform ${delayClass} ${isVisibleInView ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-8 filter blur-sm"
            }`;
    };

    const steps = [
        {
            title: "Descubrimiento & análisis",
            description:
                "Analizamos tu marca, tu audiencia y tus objetivos para definir una dirección clara y un posicionamiento sólido.",
            image: "/process1.png",
        },
        {
            title: "Desarrollo & Optimización",
            description:
                "Creamos los activos clave —contenido, branding y landings de alta conversión— y los optimizamos para maximizar resultados.",
            image: "/process2.png",
        },
        {
            title: "Lanzamiento & Escala",
            description:
                "Implementamos, medimos y ajustamos tu sistema para sostener el crecimiento y escalar tu presencia con consistencia.",
            image: "/process3.png",
        },
    ];

    return (
        // Adjuntamos la referencia (componentRef) al contenedor principal
        <div ref={componentRef} className="mb-20 pt-10 px-4 md:px-6 bg-black/50">
            {/* Badge - Delay 0ms */}
            <div className={getTransitionClass("delay-0")}>
                <FeatureBadge text="Nuestro proceso" />
            </div>

            {/* Título Principal - Delay 200ms */}
            <h3 className={getTransitionClass("delay-200")}>
                Tu paso a la autoridad.
            </h3>

            {/* Subtítulo - Delay 400ms */}
            <h4 className={`text-lg md:text-xl text-gray-400 text-center mb-12 ${getTransitionClass("delay-400")}`}>
                Un método simple, claro y eficaz para posicionarte y convertir mejor.
            </h4>

            {/* Tarjetas de Proceso (Grid) - Delay escalonado */}
            <div className={`grid md:grid-cols-3 max-w-[1300px] mx-auto gap-10`}>
                {steps.map((step, index) => (
                    // Aplicamos un retraso dinámico: 600ms (base) + (índice * 150ms)
                    <div
                        key={index}
                        className={getTransitionClass(`delay-${600 + index * 150}`)}
                    >
                        <ProccessCard
                            title={step.title}
                            description={step.description}
                            image={step.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}