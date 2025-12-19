"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Particles from "../Particles";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  const WORDS = ["Contenido.", "Estrategia.", "Landings."];

  // Ahora el array acepta height individual por imagen
  const images = [
    { src: "/allianz.png", height: 2.4 },
    { src: "/philips3.png", height: 2 },
    { src: "/lacarta3.png", height: 2 },
  ];

  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 1900);

    return () => clearInterval(interval);
  }, []);

  const getTransitionClass = (delayClass = "") => {
    return `transition-all duration-1000 ease-out transform ${delayClass} ${mounted
      ? "opacity-100 translate-y-0 filter blur-0"
      : "opacity-0 translate-y-8 filter blur-sm"
      }`;
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* --- EFECTOS DE FONDO --- */}
      <div className={`transition-opacity duration-2000 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[100px] lg:h-[350px] lg:w-[700px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0 transition-all duration-1500 ease-out 
                    ${mounted ? "left-[-5%] md:left-[5%] opacity-100" : "left-[-50%] md:left-[-30%] opacity-0"}`}
        ></div>

        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0 transition-all duration-1500 ease-out 
                    ${mounted ? "right-[5%] opacity-100" : "right-[-30%] opacity-0"}`}
        ></div>

        <Particles />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10">
        <div className="mt-15 md:mt-19 flex flex-col items-center justify-center px-4">
          {/* Badge */}
          <div className={getTransitionClass("delay-100")}>
            <div className="flex  items-center mb-6 gap-4">
              <span className="shadow-gray-400 flex items-center gap-3  shadow text-white text-[10px] md:text-sm font-medium px-6 py-2 rounded-full bg-black/20">
                +100M VIEWS{" "}
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2">

                  {/* 🔥 Avatar más chico */}
                  <Avatar className="size-5 md:size-7">
                    <AvatarImage src="/avatar2.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <Avatar className="size-5 md:size-7">
                    <AvatarImage src="/avatar3.jpg" alt="@maxleiter" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>

                  <Avatar className="size-5 md:size-7">
                    <AvatarImage src="/avatar4.png" alt="@evilrabbit" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
              </span>
            </div>
          </div>

          {/* Título */}
          <h1
            className={`text-center text-4xl md:text-6xl tracking-tight text-white/80 leading-tight ${getTransitionClass(
              "delay-200"
            )}`}
          >
            Posicionando <br className="md:hidden" />
            CEOs y Startups <br />
            con{" "}
            <span className="inline-block min-w-[150px] md:min-w-[280px]">
              <span
                key={index}
                className="inline-block animate-fade-in bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-orange-950"
              >
                {WORDS[index]}
              </span>
            </span>
          </h1>

          {/* Subtítulo */}
          <h2
            className={`text-lg md:text-xl text-gray-400 mt-6 text-center font-light ${getTransitionClass(
              "delay-300"
            )}`}
          >
            Instalamos sistemas de posicionamiento <br className="md:hidden" />
            que atraen{" "}
            <strong className="text-white font-semibold">
              usuarios, talento e inversión.
            </strong>
          </h2>

          {/* Botones */}
          <div className={`flex items-center gap-4 mt-10 ${getTransitionClass("delay-500")}`}>
            <Link target="_blank" href="https://calendly.com/matiasnoguera">
              <Button>
                Quiero Posicionarme <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>

            <Link href="/#newsletter">
              <Button variant="outline" className="bg-white/5 hover:bg-transparent hover:text-white">
                Ver en acción
              </Button>
            </Link>
          </div>

          {/* --- SECCIÓN DE VIDEO --- */}
          <div className={`w-full max-w-3xl px-4 md:px-0 mt-12 ${getTransitionClass("delay-600")}`}>
            <div className="relative group">
              <video
                poster="/poster.png"
                controls
                src="https://cdn.jumpshare.com/preview/1sWxMhlBmq4XiBiQ9EYckVueaEdJgjj3B4cfJ3Mgky0E0k9VPexaAEqCP-lWGaC23UQxk7_gBvW7rWB653UV2QqFYCKUhK21eW2yuxDagao"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover drop-shadow-[0_0_50px_rgba(255,90,0,0.7)]
"
              />
            </div>
          </div>
          {/* Logos Marcas */}
          <div className={`overflow-hidden w-[80%] md:w-[400px] mx-auto mt-15 rounded-full ${getTransitionClass("delay-700")}`}>
            <p className="text-center mb-6 text-white/70 text-lg font-medium">Confiaron en nosotros</p>

            <div className="scroll-container flex gap-8 items-center">
              {[...images, ...images, ...images].map((image, idx) => (
                <div key={idx} className="shrink-0">
                  <Image
                    src={image.src}
                    alt={`Brand ${(idx % images.length) + 1}`}
                    width={100}
                    height={image.height * 4}
                    /* 🔥Más chicos en mobile + normal en desktop */
                    style={{
                      height: `${image.height - 1}rem`,
                    }}
                    className={`w-auto object-contain filter grayscale 
                               md:h-[${image.height}rem]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
