import React from "react";
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
      { name: "Procesos", href: "/#features" },
      { name: "Servicios", href: "/#pricing" },
      { name: "Beneficios", href: "/#faqs" },
      { name: "Testimonios", href: "/#faqs" },
      { name: "Contacto", href: "/#faqs" },
    ],
  },
  {
    title: "Mails",
    links: [
      { name: "matias@referent.site", href: "mailto:matias@referent.site" },
    ],
  },
//   {
//     title: "Legales",
//     links: [
//       { name: "Terminos y condiciones", href: "termns" },
//       { name: "Politicas de privacidad", href: "politics" },
//     ],
//   }
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/matinogueraa/", label: "Instagram" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/referente-media?trk=public_profile_topcard-current-company", label: "TikTok" },
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
  return (
    <section className="pt-42 max-w-[1300px] mx-auto px-4 md:px-0">
      <div className="">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
           
            <p className="max-w-[70%]  text-white text-lg font-bold">
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
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
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
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          {/* <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

