import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center  p-4 rounded bg-black/80 border border-gray-800  max-w-[1400px] mx-auto mt-5">
            <Image src="/logo.png" width={120} height={120} alt="logo" />
            <nav className="flex items-center gap-4">
                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link href="#">Procesos</Link>
                    <Link href="#">Servicios</Link>
                    <Link href="#">Beneficios</Link>
                    <Link href="#">Testimonios</Link>
                    <Link href="#">Contacto</Link>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="text">Agendar llamada <ArrowUpRight /></Button>
                    <Button className="bg-black hover:bg-black"><Globe />ES</Button>
                </div>
            </nav>
        </nav>
    )
}