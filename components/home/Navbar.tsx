"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Contenedor sticky con padding */}
      <div className="sticky top-0 z-50 w-full flex justify-center py-5 px-4">
        {/* --- NAVBAR PRINCIPAL --- */}
        <nav className="flex justify-between items-center p-4 w-full rounded-lg bg-black/40 border border-white/5 max-w-[1300px] backdrop-blur-md shadow-lg">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              width={120}
              height={120}
              alt="logo"
              className="w-24 md:w-[120px] h-auto"
            />
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm font-medium text-white">
              <Link href="/#process" className="hover:text-primary transition-colors">Procesos</Link>
              <Link href="/#services" className="hover:text-primary transition-colors">Servicios</Link>
              <Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonios</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contacto</Link>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <Link target="_blank" href="https://calendly.com/matiasnoguera">
                <Button>Agendar llamada <ArrowUpRight /></Button>
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
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú mobile */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="w-20 h-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links del menú */}
          <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
            <Link
              href="/#process"
              onClick={handleLinkClick}
              className="text-2xl font-medium text-white hover:text-primary transition-colors py-2"
            >
              Procesos
            </Link>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="text-2xl font-medium text-white hover:text-primary transition-colors py-2"
            >
              Servicios
            </Link>
            <Link
              href="/#testimonials"
              onClick={handleLinkClick}
              className="text-2xl font-medium text-white hover:text-primary transition-colors py-2"
            >
              Testimonios
            </Link>
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="text-2xl font-medium text-white hover:text-primary transition-colors py-2"
            >
              Contacto
            </Link>
          </div>

          {/* Footer con botones */}
          <div className="p-6 space-y-3 border-t border-white/10">
            <Link
              target="_blank"
              href="https://calendly.com/matiasnoguera"
              className="block w-full"
              onClick={handleLinkClick}
            >
              <Button className="w-full h-12 text-base">
                Agendar llamada <ArrowUpRight className="ml-2" />
              </Button>
            </Link>
            <Button className="w-full h-12 bg-white/10 text-white hover:bg-white/20 border border-white/20">
              <Globe className="w-4 h-4 mr-2" /> ES
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}