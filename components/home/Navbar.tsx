"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button"; // Asegúrate de que esta ruta sea correcta en tu proyecto
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contenedor sticky con padding */}
      <div className="sticky top-0 z-140 w-full flex justify-center py-5 px-4">
        {/* --- NAVBAR PRINCIPAL --- */}
        <nav className="flex justify-between items-center p-4 w-full rounded-lg bg-black/70 border border-gray-800 max-w-[1400px] px-6 md:px-10 backdrop-blur-md shadow-lg">
          
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" width={120} height={120} alt="logo" className="w-24 md:w-[120px] h-auto" />
          </Link>

          {/* --- DESKTOP MENU (Visible solo en md en adelante) --- */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm font-medium text-white">
              <Link href="#" className="hover:text-orange-500 transition-colors">Procesos</Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">Servicios</Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">Beneficios</Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">Testimonios</Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">Contacto</Link>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white border border-gray-700">
                <Globe className="mr-2 h-4 w-4" /> ES
              </Button>
            </div>
          </div>

          {/* --- MOBILE TOGGLE BUTTON (Visible solo en móviles) --- */}
          <button 
            className="md:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

     
    </>
  );
}