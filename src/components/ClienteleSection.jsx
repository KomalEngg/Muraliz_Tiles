"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function ClienteleSection() {
  const data = [
    {
      title: "Temple Design",
      text: "We create divine temple spaces that bring peace, spirituality, and timeless elegance into your surroundings.",
      img: "/temple.jpg",
    },
    {
      title: "Modular Kitchen",
      text: "Modern kitchen designs crafted for functionality, comfort, and a seamless cooking experience with a stylish touch.",
      img: "/kitchen.jpg",
    },
    {
      title: "Elevation Design",
      text: "Innovative elevation designs that enhance the exterior look of your space with a unique and impressive identity.",
      img: "/elevation.jpg",
    },
    {
      title: "Designer Walls",
      text: "Creative wall designs that add texture, depth, and a premium aesthetic feel to your interiors.",
      img: "/designing_wall.jpg",
    },
  ];

  return (
    <section className="bg-gray-300 py-16 px-4">

      <h2 className="text-center text-4xl md:text-5xl font-serif tracking-[6px]">
        CLIENTELE
      </h2>

      {/* GOLDEN DIVIDER */}
      <div className="flex justify-center items-center gap-3 mt-3 mb-10">
        <div className="w-14 h-[2px] bg-[#b89b5e]"></div>
        <span className="text-[#b89b5e] text-xl">♡</span>
        <div className="w-14 h-[2px] bg-[#b89b5e]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg">

                {/* LEFT IMAGE */}
                <div className="relative w-full h-[250px] md:h-[400px]">
                  <Image
                    src={item.img}
                    alt="client"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="p-6 md:p-10 flex flex-col justify-between">

                  <div>
                    {/* ⭐ REAL STARS (SVG) */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#b89b5e"
                          viewBox="0 0 24 24"
                          strokeWidth="0"
                          className="w-5 h-5"
                        >
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.26a1 1 0 00.95.69h6.588c.969 0 1.371 1.24.588 1.81l-5.329 3.872a1 1 0 00-.364 1.118l2.036 6.26c.3.921-.755 1.688-1.54 1.118l-5.329-3.872a1 1 0 00-1.176 0l-5.329 3.872c-.784.57-1.838-.197-1.539-1.118l2.036-6.26a1 1 0 00-.364-1.118L.98 11.687c-.783-.57-.38-1.81.588-1.81h6.588a1 1 0 00.95-.69l2.036-6.26z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-[#b89b5e] text-sm font-semibold tracking-wider">
                      CLIENT TYPE
                    </p>

                    <h3 className="text-2xl font-bold my-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 italic leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* GOLDEN BUTTON */}
                  <div className="mt-8 border-t pt-4">
                    <Link href="/clientele">
                      <span className="text-[#b89b5e] text-sm font-semibold cursor-pointer border-b border-[#b89b5e] hover:text-[#a38950] transition">
                        Learn More →
                      </span>
                    </Link>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}