import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Portfolio />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
