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

    // 🔥 ARRAY DE TESTIMONIOS
    const testimonials = [
        {
            quote: "El equipo de Referent fue la pieza clave para construir mi marca personal en LinkedIn.",
            name: "Facundo Aguirre",
            title: "CEO",
            company: "Vippen",
            imageSrc: "/avatar1.jpg",
        },
        {
            quote: "Su forma de trabajo es impecable. Desde el primer mes empecé a ver resultados.",
            name: "Mariana López",
            title: "Founder",
            company: "MKT Studio",
            imageSrc: "/avatar2.jpg",
        },
        {
            quote: "Profesionales, rápidos y con enfoque estratégico. Los recomiendo a todos mis clientes.",
            name: "Julián Torres",
            title: "Director",
            company: "Agencia Nord",
            imageSrc: "/avatar3.jpg",
        },
          {
            quote: "El equipo de Referent fue la pieza clave para construir mi marca personal en LinkedIn.",
            name: "Facundo Aguirre",
            title: "CEO",
            company: "Vippen",
            imageSrc: "/avatar1.jpg",
        },
        {
            quote: "Su forma de trabajo es impecable. Desde el primer mes empecé a ver resultados.",
            name: "Mariana López",
            title: "Founder",
            company: "MKT Studio",
            imageSrc: "/avatar2.jpg",
        },
        {
            quote: "Profesionales, rápidos y con enfoque estratégico. Los recomiendo a todos mis clientes.",
            name: "Julián Torres",
            title: "Director",
            company: "Agencia Nord",
            imageSrc: "/avatar3.jpg",
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

                <div className="grid md:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
                    {testimonials.map((item, i) => (
                        <TestimonialCard
                            key={i}
                            quote={item.quote}
                            name={item.name}
                            title={item.title}
                            company={item.company}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
