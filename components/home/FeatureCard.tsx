import { FeatureType } from "@/types/types";
import Image from "next/image";

// Ya no necesitamos 'colSpan' en los props si no lo usaremos para lógica interna
export default function FeatureCard({ title, description, image = "/process1.png" }: FeatureType) {    
    return (
        // ELIMINADA la clase getColSpanClass() de aquí
        <div className={`bg-white/5 p-4 rounded-2xl border border-white/10`}>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain rounded-2xl"
                />

                {/* Overlay con desvanecido inferior */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90" />
            </div>

            <p className="text-2xl mt-4 font-semibold">{title}</p>

            <p className="text-white/70">
                {description}
            </p>
        </div>
    );
}