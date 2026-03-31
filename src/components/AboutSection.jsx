import Image from 'next/image';

const AboutSection = () => {
  const images = [
    '/banner 1.jpg',
    '/banner 2.png',
    '/banner 3.jpg',
    '/banner4.jpg',
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-[5%] lg:px-[8%]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Content (Wider for better readability) */}
        <div className="w-full lg:w-[60%]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.15em] text-gray-500 uppercase leading-[1.3]">
              Crafting Timeless <br />
              Elegance For Your Spaces
            </h2>
            <div className="mt-6 w-full h-[1px] bg-gray-200"></div>
          </div>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed text-base md:text-lg text-justify">
            <p>
              Welcome to <span className="font-normal text-gray-800">Muraliz Tiles & Stones</span>, 
              your one-stop destination for premium quality surfaces that can bring your vision to life. 
              Embrace a seamless journey towards transforming your home or crafting a fresh environment 
              as our extensive range of tiles and stones becomes your canvas, enabling you to curate 
              the ideal foundation that reflects your unique style.
            </p>
            <p>
              We pride ourselves on offering a vast array of surface designs, sizes, and colors 
              to meet the needs and preferences of our customers. Whether you prefer classic 
              styles that exude timeless elegance or modern, cutting-edge designs that push 
              the boundaries of innovation, we have something for everyone.
            </p>
          </div>
        </div>

        {/* Right Side: Image Grid (Slightly smaller to give text room) */}
        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-3 md:gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden border border-gray-300 p-1 bg-white">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Tile Design ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;