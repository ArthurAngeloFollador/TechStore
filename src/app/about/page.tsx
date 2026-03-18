import Header from "@/components/header";
import Hero from "@/components/hero";

function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="mt-16">
        <Hero />
      </main>
    </div>
  );
}

export default Page;
