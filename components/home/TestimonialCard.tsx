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
    <div className="relative p-8 rounded-3xl shadow-2xl bg-white/5 border border-white/10 overflow-hidden">

      <div
        className=" absolute bottom-0 left-0 w-20 h-20 
        bg-orange-500/70 rounded-2xl blur-2xl 
        pointer-events-none z-0 transition-all duration-1500 ease-out opacity-100"
      ></div>

      <div className="relative z-10">
        <blockquote className="text-sm md:text-base mb-6 text-white/70">
          {quote}
        </blockquote>

        <div className="flex items-center space-x-4">
          <div className="shrink-0 w-16 h-16 relative rounded-full overflow-hidden border-2 border-orange-500">
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
