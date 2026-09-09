"use client";

import {
  RxLayers,
  RxGear,
  RxReader,
  RxShuffle,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import type { IconType } from "react-icons";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData: {
  Icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    Icon: RxLayers,
    title: "Enterprise ERP",
    description: "Full-cycle ERP platforms with inventory control, financial ledgers, and role-based ACLs.",
  },
  {
    Icon: RxShuffle,
    title: "Approval Workflows",
    description: "Autonomous multi-level approval routing, dynamic escalation timers, and audit logs.",
  },
  {
    Icon: RxReader,
    title: "Batch PDF Engine",
    description: "High-volume automated invoice and document printing with JasperReports & BI Publisher.",
  },
  {
    Icon: RxGear,
    title: "REST & Cloud APIs",
    description: "Secure integrations with third-party web services, payment gateways, and cloud microservices.",
  },
  {
    Icon: RxRocket,
    title: "Database Tuning",
    description: "Query plan optimization, indexing strategies, and high-throughput PL/SQL stored procedures.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-65 sm:h-85"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.18)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.25)] border border-white/10 hover:border-accent transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold text-white">{item.title}</div>
              <p className="max-w-87.5 leading-normal text-white/70 text-sm">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
