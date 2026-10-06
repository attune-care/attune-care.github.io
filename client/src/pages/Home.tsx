import { Contact, Footer } from "@/components/site/Contact";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Nav } from "@/components/site/Nav";
import { Opportunity } from "@/components/site/Opportunity";
import { Problem } from "@/components/site/Problem";
import { Product } from "@/components/site/Product";
import { Story } from "@/components/site/Story";
import { Team } from "@/components/site/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <Problem />
        <Product />
        <Opportunity />
        <Mission />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
