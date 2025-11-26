import FeatureBadge from "./FeatureBadge";
import ProccessCard from "./ProcessCard";

export default function Process() {
  const steps = [
    {
      title: "Descubrimiento & análisis",
      description:
        "Analizamos tu marca, tu audiencia y tus objetivos para definir una dirección clara y un posicionamiento sólido.",
      image: "/process1.png",
    },
    {
      title: "Desarrollo & Optimización",
      description:
        "Creamos los activos clave —contenido, branding y landings de alta conversión— y los optimizamos para maximizar resultados.",
      image: "/process2.png",
    },
    {
      title: "Lanzamiento & Escala",
      description:
        "Implementamos, medimos y ajustamos tu sistema para sostener el crecimiento y escalar tu presencia con consistencia.",
      image: "/process3.png",
    },
  ];

  return (
    <div className="mb-20">
      <FeatureBadge text="Nuestro proceso" />
      <h3>Tu paso a la autoridad.</h3>
      <h4>Un método simple, claro y eficaz para posicionarte y convertir mejor.</h4>

      <div className="grid md:grid-cols-3 max-w-[1300px] mx-auto gap-10 px-5">
        {steps.map((step, index) => (
          <ProccessCard
            key={index}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        ))}
      </div>
    </div>
  );
}
