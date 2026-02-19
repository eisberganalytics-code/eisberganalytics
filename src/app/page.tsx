import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UseCaseTabs } from "@/components/UseCaseTabs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <UseCaseTabs />
      <ContactForm />
      <Footer />
    </main>
  );
}
