import Image from "next/image";

interface CardProps {
  techName: string;
  logo: string;
}

export default function Card({ techName, logo }: CardProps) {
  const typeDescription =
    "Utilizado na lógica do projeto e para moldar a estrutura do projeto, o TypeScript é uma linguagem de programação que é um superconjunto do JavaScript, adicionando tipagem estática e recursos avançados para melhorar a qualidade e a manutenção do código.";
  const nextDescription =
    "Next.js é um framework React para desenvolvimento de aplicações web, oferecendo recursos como renderização do lado servidor, geração de sites estáticos e roteamento automático.";
  const tailwindDescription =
    "Tailwind CSS é um framework de CSS utilitário que permite criar designs personalizados diretamente no HTML, promovendo uma abordagem de desenvolvimento rápida e eficiente.";

  const Description = () => {
    if (techName === "TypeScript") {
      return <p>{typeDescription}</p>;
    } else if (techName === "Next.js") {
      return <p>{nextDescription}</p>;
    } else {
      return <p>{tailwindDescription}</p>;
    }
  };

  return (
    // Card
    <div className="flex h-66 w-110 flex-col gap-4 rounded-lg bg-white py-8 px-5">
      {/* Card Logo */}
   
      <div className="h-10 w-10 rounded-md bg-neutral-200 p-1.5">
        {/* Icon */}
        {/* <img src={`/${logo.toLowerCase()}.svg`} /> */}
        <Image
          src={`/${logo.toLowerCase()}.svg`}
          alt="Logo"
          width={100}
          height={100}
          quality={100}
          priority
        />
      </div>   <div className="flex flex-col gap-2">
      <div className="card-title">{techName}</div>
      <div className="card-text">{Description()}</div>
      </div>
    </div>
  );
}
