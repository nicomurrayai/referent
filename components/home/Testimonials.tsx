"use client";

import { useState, useEffect, useRef } from "react";
import FeatureBadge from "./FeatureBadge";
import Particles from "../Particles";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
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
        return `transition-all duration-1000 ease-out transform ${delayClass} ${
            isVisibleInView
                ? "opacity-100 translate-y-0 filter blur-0"
                : "opacity-0 translate-y-8 filter blur-sm"
        }`;
    };

    const testimonials = [
        {
            quote: "Referent impulsó mi marca como CEO y me dio la autoridad que necesitaba en LinkedIn para crecer con propósito.",
            name: "Facundo Aguirre",
            title: "CEO",
            company: "Vippinn",
            imageSrc: "/avatar1.jpg",
        },
        {
            quote: "Con Referent logramos un flujo constante de leads y una marca fuerte; superamos los 10.000 seguidores en tiempo récord.",
            name: "Alexandra Ponton",
            title: "CEO",
            company: "All for Women",
            imageSrc: "/avatar2.jpg",
        },
        {
            quote: "Referent instaló un sistema de adquisición que duplicó mi audiencia y posicionó mi mensaje frente a las personas correctas.",
            name: "Grace Reynosa",
            title: "CEO",
            company: "Metodo AYA",
            imageSrc: "/avatar3.jpg",
        },
        {
            quote: "Trabajar con Referent transformó mi negocio: optimicé mi propuesta, mi landing y mi posicionamiento como CEO.",
            name: "Wolf",
            title: "CEO",
            company: "Wolfy's Bar",
            imageSrc: "/avatar6.png",
        },
        {
            quote: "Referent me dio claridad estratégica y contenido con dirección; pasé de cero a miles de seguidores construyendo una marca sólida.",
            name: "Francisco Asef",
            title: "CEO",
            company: "Rule your Mood",
            imageSrc: "/avatar4.png",
        },
        {
            quote: "Gracias a Referent crecimos de forma consistente, automatizamos procesos y elevamos la precisión en cada acción estratégica.",
            name: "Alexis Chiaramonte",
            title: "CEO",
            company: "ABG Consulting",
            imageSrc: "/avatar8.jpg",
        },
    ];

    return (
        <section className="relative w-full py-20 bg-black overflow-hidden">
            <div
                className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-2000 ${
                    isVisibleInView ? "opacity-100" : "opacity-0"
                }`}
            >
                <Particles />
            </div>

            <div ref={componentRef} className="relative z-10 px-4 md:px-6">
                <div className={getTransitionClass("delay-0")}>
                    <FeatureBadge text="Testimonios" />
                </div>

                <h3 className={getTransitionClass("delay-200")}>
                    Clientes que crecieron junto a nosotros
                </h3>

                <h4
                    className={`text-lg md:text-xl text-gray-400 text-center mb-12 ${getTransitionClass(
                        "delay-400"
                    )}`}
                >
                    Descubre el camino del crecimiento detrás de cada CEO
                </h4>

                {/* ⭐ Ahora cada testimonial tiene animación */}
                <div className="grid md:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
                    {testimonials.map((item, i) => (
                        <div key={i} className={getTransitionClass(`delay-${200 * (i + 1)}`)}>
                            <TestimonialCard
                                quote={item.quote}
                                name={item.name}
                                title={item.title}
                                company={item.company}
                                imageSrc={item.imageSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
