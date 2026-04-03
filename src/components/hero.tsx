"use client";

import "@/styles/globals.css";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
function Hero() {
  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col items-start gap-8 border-b border-gray-300 pb-5">
        {/* Img & Text */}
        <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between px-6">
          {/* Text */}
          <div className="w-1/2 flex-col items-start gap-6 lg:flex">
            <div className="text-color5 flex w-52 items-center justify-center gap-1.5 rounded-full border border-gray-300 bg-indigo-100 p-0.5 font-bold select-none">
              {/* <div className="h-2 w-2 rounded-full bg-red-400"></div> */}
              <MdVerified />
              Portfolio Project v1.0
            </div>
            <div className="title-1">E-commerce de Estrutura Moderna</div>
            {/* Completar depois */}
            <div className="text-neutral">
              Este é um projeto de e-commerce feito para aprender as tecnologias, Next.Js, Tailwind CSS e TypeScript. O projeto é um exemplo de arquitetura moderna para lojas online, com foco em desempenho, escalabilidade e experiência do usuário. Ele inclui recursos como renderização do lado servidor, geração de sites estáticos e uma interface de usuário responsiva e atraente.
            </div>
          </div>
          {/* Img */}
          <div className="w-1/2 justify-end sm:hidden lg:flex">
            <Image
              draggable={false}
              className="rounded-3xl shadow-lg"
              src="/laptop-image.jpg"
              alt="Laptop displaying e-commerce architecture"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="ml-5.5 flex">
          <button
            onClick={() =>
              window.open(
                "https://github.com/ArthurAngeloFollador/TechStore",
                "_blank",
                "noopener noreferrer",
              )
            }
            className="bg-color3 button-primary hover:bg-color4 cursor-pointer rounded-md border-0 p-3 transition-colors duration-300 ease-in-out"
          >
            Ver Repositório GitHub
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
