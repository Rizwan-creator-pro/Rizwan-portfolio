"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "AG Traders ERP Platform",
          path: "/thumb1.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "Employee Self-Service (ESS)",
          path: "/thumb2.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "High-Volume PDF Reporting Engine",
          path: "/thumb3.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "Multi-Branch Hospital & Gym POS",
          path: "/thumb4.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
      ],
    },
    {
      images: [
        {
          title: "Multi-Level Workflow Routing",
          path: "/thumb2.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "Oracle APEX Universal Theme",
          path: "/thumb1.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "Custom JasperReports & BI Suite",
          path: "/thumb3.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
        {
          title: "Enterprise Database Architecture",
          path: "/thumb4.png",
          link: "https://linkedin.com/in/rizwan0626",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group bg-[#181926] border border-white/10"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-85 transition-all duration-500"
                    aria-hidden
                  />

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 group-hover:xl:-translate-y-16 transition-all duration-300 px-4 text-center">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col items-center gap-y-1 text-[13px] tracking-[0.15em]"
                    >
                      <span className="text-white font-bold text-sm leading-tight drop-shadow-md">{image.title}</span>
                      <div className="flex items-center gap-x-2 text-white/90 text-xs">
                        <span className="delay-100">LIVE</span>
                        <span className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-accent font-bold">
                          PROJECT
                        </span>
                        <span className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight aria-hidden />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
