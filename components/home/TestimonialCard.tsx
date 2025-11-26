// components/TestimonialCard.tsx

import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  imageSrc,
}) => {
  return (
    <div
      className="
        relative p-8 rounded-3xl bg-white/5 border border-white/10 
        overflow-hidden h-full flex flex-col justify-between
        transition-all duration-300 ease-out
        hover:scale-[1.02]  hover:shadow-xl hover:shadow-orange-500/10
      "
    >
      {/* Glow inferior */}
      <div
        className="
          absolute bottom-0 left-0 w-24 h-24 
          bg-orange-500/40 rounded-2xl blur-2xl 
          pointer-events-none z-0 transition-all duration-700 ease-out 
          group-hover:opacity-80
        "
      ></div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <blockquote className="text-sm md:text-base mb-6 text-white/70">
          "{quote}"
        </blockquote>

        <div className="flex items-center space-x-4 mt-auto">
          <div className="shrink-0 size-14 relative rounded-full overflow-hidden shadow-2xl shadow-orange-700">
            <Image
              src={imageSrc}
              alt={`Foto de ${name}`}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div>
            <p className="text-white text-lg font-medium">{name}</p>
            <p className="text-gray-400 font-medium">
              {title} | {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
