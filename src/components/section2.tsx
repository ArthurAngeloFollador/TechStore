import Card from "./card";

export default function Section2() {
  return (
    <>
      <div className="mt-8">
        <div className="title-2">Tecnologias Utilizadas</div>
        <div className="flex flex-wrap gap-4">
          <Card techName="TypeScript" logo="typescript" />
          <Card techName="Next.js" logo="next" />
          <Card techName="Tailwind CSS" logo="tailwind" />
        </div>
      </div>
    </>
  );
}
