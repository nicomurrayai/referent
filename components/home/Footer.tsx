"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Image from "next/image";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Referent",
    links: [
      { name: "Procesos", href: "/#process" },
      { name: "Servicios", href: "/#services" },
      { name: "Beneficios", href: "/#benefits" },
      { name: "Testimonios", href: "/#testimonials" },
      { name: "Contacto", href: "/#contact" },
    ],
  }
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/matinogueraa/", label: "Instagram" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/referente-media?trk=public_profile_topcard-current-company", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terminos y condiciones", href: "termns" },
  { name: "Politicas de privacidad", href: "politics" },
];

export const Footer7 = ({
  sections = defaultSections,
  description = "Seguinos en nuestras redes.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 referent.site Todos los derechos reservados.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const getTransitionClass = (delayClass = "") => {
    return `transition-all duration-1000 ease-out transform ${delayClass} ${
      isVisible
        ? "opacity-100 translate-y-0 filter blur-0"
        : "opacity-0 translate-y-8 filter blur-sm"
    }`;
  };

  return (
    <section ref={footerRef} className="pt-42 max-w-[1300px] mx-auto px-4 md:px-0">
      <div className="">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className={`flex w-full flex-col justify-between gap-6 lg:items-start ${getTransitionClass("delay-100")}`}>
            <p className="max-w-[70%] text-white text-lg font-bold">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`grid w-full gap-6 md:grid-cols-3 lg:gap-20 ${getTransitionClass("delay-200")}`}>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h5 className="mb-4 font-bold">{section.title}</h5>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={`mt-8 flex flex-col justify-between gap-4 border-t border-white/30 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left ${getTransitionClass("delay-300")}`}>
          <p className="order-2 lg:order-1">{copyright}</p>
        </div>
      </div>
    </section>
  );
};