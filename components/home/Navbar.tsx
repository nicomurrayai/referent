"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contenedor sticky con padding */}
      <div className="sticky top-0 z-40 w-full flex justify-center py-5 px-4">
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
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* --- MOBILE OVERLAY (Menú desplegable) --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6 animate-in fade-in duration-200">
          
          {/* Cabecera del menú móvil */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-orange-500 text-2xl font-bold tracking-tight">Referent</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          {/* Enlaces verticales */}
          <div className="flex flex-col items-center gap-8 flex-1 justify-center text-white text-lg font-medium">
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">Procesos</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">Servicios</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">Beneficios</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">Testimonios</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">Contacto</Link>
          </div>

          {/* Botones inferiores */}
          <div className="flex items-center gap-3 mt-auto pb-6">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-semibold rounded-lg">
              Agendar llamada <ArrowUpRight className="ml-2" />
            </Button>
            <Button className="bg-black border border-gray-700 hover:bg-gray-900 text-white h-12 px-5 rounded-lg">
              <Globe className="mr-2 h-5 w-5" /> ES
            </Button>
          </div>

        </div>
      )}
    </>
  );
}