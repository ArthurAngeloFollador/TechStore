import Hero from "@/components/hero";
import Section2 from "@/components/section2";

function Page() {
  
  return (
    <div className="flex flex-col">
      <main className="mt-16 px-20">
        <Hero />
        <Section2 />
      </main>
    </div>
  );
}

export const metadata = {
    title: "About - TechStore",
  };

export default Page;
