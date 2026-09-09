"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Tariq Mahmood",
    position: "Lead Operations Director · JK Group",
    message:
      "Muhammad Rizwan's architecture in Oracle APEX transformed our manual inventory registers and multi-branch invoicing into a centralized, automated engine. His batch PDF reporting and approval routing saved our teams hundreds of operational hours every month.",
  },
  {
    image: "/t-avt-2.png",
    name: "Engr. Farhan",
    position: "Senior Tech Lead · Saylani Welfare",
    message:
      "Outstanding grasp of PL/SQL stored procedures, database performance tuning, and multi-level approval hierarchies. He delivered our student management and disbursement portal ahead of schedule with zero post-deployment bugs.",
  },
  {
    image: "/t-avt-3.png",
    name: "Ahmed Ghafoor",
    position: "Managing Partner · AG Traders",
    message:
      "The ERP platform built by Rizwan has handled millions of transaction rows seamlessly with rock-solid data integrity. From bulk barcode generation to financial ledgers, everything runs in milliseconds.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-100"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-75 flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full border-2 border-accent"
                  />
                </div>

                <div className="text-lg font-bold">{person.name}</div>

                <div className="text-[12px] uppercase font-medium tracking-wider text-accent">
                  {person.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-px xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-50 relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              <div className="xl:text-lg text-center md:text-left text-white/85 leading-relaxed font-light">
                "{person.message}"
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
