"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// Sabhi images se nikala gaya accurate data
const clientLists = {
  celebrities: [
    "DEEPIKA PADUKONE", "ALLU ARJUN", "BRAHMANANDAM", "RAVI TEJA", 
    "NITHIN REDDY", "GOPICHAND", "KUSHBOO SUNDAR", "CHARMME KAUR", 
    "GANESH KISHAN", "RAHUL DRAVID", "PULLELA GOPICHAND", "GURUKIRAN"
  ],
  hospitality: [
    "HILTON CONRAD (Bengaluru)", "SHERATON WHITEFIELD (Bengaluru)", 
    "COURTYARD MARRIOTT (Bengaluru)", "MARRIOTT WHITEFIELD (Bengaluru)", 
    "HILTON GOLFLINKS (Bengaluru)"
  ],
  residences: [
    "CM's camp office, (Vijaywada)", "ETELA RAJENDER (FM-Hyderabad)", 
    "MICROLABS", "KARACHI BAKERY", "RS BROTHERS", "PRAKASH SHETTY (Gold Finch)", 
    "SHIV KUMAR UDASI (MP)", "KARBONN MOBILES"
  ],
  projects: [
    "AMAZON (Bengaluru, Hyderabad, Chennai)", "ANZ OFFICE (Bengaluru)", 
    "APARNA SERENE (Hyderabad)", "DELL (Bengaluru)", "EXXON MOBILE (Bengaluru)", 
    "FACEBOOK (Bengaluru)", "GOOGLE (Hyderabad)", "GOKULDAS LIFESTYLE (Bengaluru)", 
    "HILTON GOLF LINKS (Bengaluru)", "MICROSOFT (Bengaluru)", "UBER (Bengaluru)"
  ]
};

const ClienteleSection = ({ title, list, image, isReverse, id }) => (
  <section id={id} className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 items-center mb-24 relative px-4`}>
    
    {/* Image Container - occupies half width */}
    <div className="w-full md:w-7/12 relative h-[500px] md:h-[600px] overflow-hidden group shadow-xl">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      {/* Dark overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
    </div>

    {/* Floating Content Box - Overlapping the Image */}
    <motion.div 
      initial={{ x: isReverse ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full md:w-5/12 z-20 -mt-20 md:mt-0 ${isReverse ? 'md:-mr-24' : 'md:-ml-24'}`}
    >
      <div className="bg-white p-8 md:p-12 border border-[#b89b5e] shadow-2xl relative">
        {/* Section Heading inside the box */}
        <h2 className="text-[#b89b5e] text-4xl font-serif mb-6 tracking-tight">{title}</h2>
        
        <ul className="grid grid-cols-1 gap-3">
          {list.map((name, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 font-medium text-[10px] md:text-[12px] tracking-[0.1em] leading-relaxed uppercase">
              <span className="w-1.5 h-1.5 bg-[#b89b5e] rounded-full mt-1.5 shrink-0"></span>
              {name}
            </li>
          ))}
        </ul>

        
      </div>
    </motion.div>
  </section>
);

const ClientelePage = () => {
  return (
    <>
    <div className="bg-white min-h-screen">
      <Navbar/> 
      {/* Header Bar */}
      <div className="bg-[#5a5a5a] py-6 text-center  top-0 w-full z-50">
        <h1 className="text-white uppercase tracking-[0.4em] text-xs font-bold">Clientele</h1>
      </div>

      <div className="max-w-7xl mx-auto pt-40 pb-20 overflow-visible">
        
        <ClienteleSection 
          id="celebrities"
          title="Celebrities" 
          list={clientLists.celebrities} 
          image="/cel.jpg" 
          isReverse={false}
        />

        <ClienteleSection 
          id="hospitality"
          title="Hospitality" 
          list={clientLists.hospitality} 
          image="/cel2.jpg" 
          isReverse={true} 
        />

        <ClienteleSection 
          id="residences"
          title="Residences" 
          list={clientLists.residences} 
          image="/cel3.jpg" 
          isReverse={false}
        />

        <ClienteleSection 
          id="projects"
          title="Projects" 
          list={clientLists.projects} 
          image="/cel4.jpg" 
          isReverse={true}
        />

      </div>

      {/* Footer from image */}
    
    </div>
    <Footer />
    </>
  );
};

export default ClientelePage;