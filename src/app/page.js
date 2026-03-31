import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ClienteleSection from '@/components/ClienteleSection';
import OurClients from '@/components/OurClients';
import Testimonials from '@/components/Testimonials';
import DesigningProduction from '@/components/DesigningProduction';
import Footer from '@/components/Footer';

import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <Hero />
<AboutSection/>
<ProcessSection/>
<ClienteleSection/>
<OurClients/>
<Testimonials/>
<DesigningProduction/>

<BlogSection/>
  <Footer/>
      
    
    </main>
  );
}