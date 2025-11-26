"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button"; // Asumo que este componente existe
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import Image from "next/image"; // Componente de Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en los enlaces del menú
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Contenedor sticky con padding */}
      <div className="sticky top-0 z-50 w-full flex justify-center py-5 px-4">
        {/* --- NAVBAR PRINCIPAL --- */}
        <nav className="flex justify-between items-center p-4 w-full rounded-lg  bg-black/40 border border-white/5 max-w-[1300px] backdrop-blur-md shadow-lg">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              width={120}
              height={120}
              alt="logo"
              className="w-24 md:w-[120px] h-auto"
            // Nota: Asegúrate de tener una imagen en /logo.png
            />
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm font-medium text-white">
              <Link href="#" className="hover:text-primary transition-colors">Procesos</Link>
              <Link href="#" className="hover:text-primary transition-colors">Servicios</Link>
              <Link href="#" className="hover:text-primary transition-colors">Beneficios</Link>
              <Link href="#" className="hover:text-primary transition-colors">Testimonios</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contacto</Link>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <Link target="_blank" href="https://calendly.com/matiasnoguera">
                <Button>Agendar llamada <ArrowUpRight  /></Button>
              </Link>

              <Button className="bg-black text-white hover:bg-black">
                <Globe className="w-4 h-4 mr-1" /> ES
              </Button>
            </div>
          </div>

          {/* --- BOTÓN MOBILE (toggle) --- */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* --- MOBILE MENU OVERLAY COMPLETO (responsive, cubre todo el alto) --- */}

    </>
  );
}