import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import PainPoints from "@/components/PainPoints";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Partner from "@/components/Partner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <WaveDivider />
      <PainPoints />
      <WaveDivider flip />

      <Products />

      <Differentials />

      <HowItWorks />

      <Partner />

      <Testimonials />

      <FAQ />

      <ContactCTA />

      <Footer />

      <WhatsAppFab />
      <CookieBanner />
      <ScrollReveal />
    </>
  );
}
