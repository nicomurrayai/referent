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
    { src: "/vipping5.png", height: 3.5 },
    { src: "/pixelarios1.png", height: 3 },
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
        <div className="mt-13 md:mt-16 flex flex-col items-center justify-center px-4">
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
            className={`text-center text-2xl md:text-5xl tracking-tight text-white/80 leading-tight ${getTransitionClass(
              "delay-200 max-w-7xl"
            )}`}
          >
            Te convertimos en el CEO que tu mercado necesita que seas, convirtiéndote en la mejor opción en tu nicho sin anuncios.
          </h1>

          {/* Subtítulo */}
          <h2
            className={`text-base md:text-xl text-gray-400 mt-6 text-center font-light ${getTransitionClass(
              "delay-300"
            )}`}
          >
            Instalamos sistemas de posicionamiento <br className="md:hidden" />
            que atraen{" "}
            <strong className="text-white font-semibold">
              usuarios, talento e inversión en 60 días.
            </strong>
          </h2>

          {/* Botones */}
          <div className={`flex items-center gap-4 mt-10 ${getTransitionClass("delay-500")}`}>
            <Link target="_blank" href="https://calendly.com/matiasnogueraa">
              <Button>
                Quiero Posicionarme <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            {/* 
            <Link href="/#newsletter">
              <Button variant="outline" className="bg-white/5 hover:bg-transparent hover:text-white">
                Ver en acción
              </Button>
            </Link> */}
          </div>

          {/* --- SECCIÓN DE VIDEO --- */}
          <div className={`w-full max-w-3xl px-4 md:px-0 mt-12 ${getTransitionClass("delay-600")}`}>
            <div className="relative group">
              <video
                poster="/poster.webp"
                controls
                playsInline
                src="https://cdn-cf-east.streamable.com/video/mp4/rlurqw.mp4?Expires=1766538581880&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=KC3O7cb~nGBrIbFj0qjqzfu0G56oUcLhvcr0IATcpbSpxWVs3HsDNgnq06mjTGFRLWzf0Dy4DJTHzMrMGMPHdAF6QdSnN9UTfFb5SdZzUnDbCx3TJqRULeXzOQQqeDjud0znJRqTBqLCg2ZbdM1rhn36o3~oMLwkLeagTdf-k6bXID2XxEAjdbcHmkPM2zoV-WfpFHSp3hmoxtkqEEEYhsZTAFPrbWWwwK8P7OTQTin1Fg5q53KSrTewZt3Ahy1vUOEgFlZdmwVjfToALE8HQ5NFIQcY6K0o7r3L7ZOcyTk-YQ0KgRFuSH51dZDvoJn-f1n765dK7BzA57L-2wW8Wg__"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover drop-shadow-[0_0_50px_rgba(255,90,0,0.7)]"
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
                    className={`w-auto  object-contain filter grayscale 
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
