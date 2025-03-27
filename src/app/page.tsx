import Navbar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ServicesTab from '@/components/ServicesTab';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '../components/Footer';
import MarketInsights from '@/components/MarketInsights';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarketInsights />
      <ServicesTab />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
