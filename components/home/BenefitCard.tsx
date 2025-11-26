import React from "react";
import { LucideIcon } from "lucide-react";

type BenefitsProps = {
  title: string;
  description: string;
  icon: LucideIcon; // Recibe un componente de ícono
};

export default function BenefitCard({ title, description, icon: Icon }: BenefitsProps) {
  return (
    <div
      className="
        relative p-8 rounded-3xl bg-white/5 border border-white/10 
        overflow-hidden h-full flex flex-col
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute top-0 right-0 size-32 
          bg-orange-500/40 rounded-2xl blur-2xl
          pointer-events-none z-0 transition-all duration-700 ease-out
        "
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        
        {/* Ícono */}
        <div className="mb-4 p-3 bg-black rounded-2xl w-fit">
          <Icon className="size-8 text-primary drop-shadow" />
        </div>

        {/* Título */}
        <h3 className="text-white text-2xl font-semibold mb-2">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white/70 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
