import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import Particles from "../Particles";

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
            
            {/* --- FONDO Y EFECTOS --- */}
            
            {/* Destello Naranja Superior Izquierda */}
            <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[200px] bg-orange-500/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
            
            {/* Destello Naranja Inferior Derecha (Más intenso como en la imagen) */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[350px]  bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Efecto de Partículas */}
            <Particles />

            {/* --- CONTENIDO --- */}
            <div className="relative z-10">
                <Navbar />
                
                <div className="mt-32 flex flex-col items-center justify-center px-4">
                    {/* Badge 200M */}
                    <span className="border border-gray-800 text-gray-300 text-base font-medium px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-6">
                        200M VIEWS
                    </span>

                    {/* Título Principal */}
                    <h1 className="text-center text-5xl md:text-7xl  tracking-tight text-white/80 leading-tight">
                        Posicionando CEOs y Startups <br />
                        con Contenido.
                    </h1>

                    {/* Subtítulo */}
                    <h2 className="text-lg md:text-xl text-gray-400 mt-6 text-center  font-light">
                        Instalamos sistemas de posicionamiento que atraen <strong className="text-white font-semibold">usuarios, talento e inversión.</strong>
                    </h2>

                    {/* Botones */}
                    <div className="flex items-center gap-4 mt-10">
                        <Button >
                            Quiero posicionarme <ArrowUpRight />
                        </Button>
                        
                        <Button variant="outline" className="bg-transparent border border-gray-700 text-white hover:bg-white/5 hover:text-white">
                            Ver en acción
                        </Button>
                    </div>

                    {/* Logos (Opcional, basado en la imagen para completar el look) */}
                    <div className="mt-20 flex gap-8 opacity-40 grayscale items-center">
                         {/* Aquí irían los logos de Philips, Allianz, etc. */}
                         <span className="text-xl font-bold">PHILIPS</span>
                         <span className="text-xl font-bold">Allianz</span>
                         <span className="text-xl font-bold">LaCarta!</span>
                         <span className="text-xl font-bold">Vippin</span>
                         <span className="text-xl font-bold">Pixelarios</span>
                    </div>
                </div>
            </div>
        </div>
    )
}