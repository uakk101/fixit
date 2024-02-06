import Ceraousal from "@/components/Ceraousal";
import Features from "@/components/Features";
import Card from "@/components/Card";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="h-[50px]"></div>
      <Hero />
      <Ceraousal />
      <Guide />
      <Features />
      <Card />
    </>
  );
}
