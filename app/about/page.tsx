"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaDatabase,
  FaFilePdf,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiPostgresql,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  icons?: IconType[];
};

type AboutDataItem = {
  title: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Oracle APEX & Database Engine",
        icons: [GrOracle, FaDatabase, SiPostgresql],
      },
      {
        title: "Frontend & Universal Theme",
        icons: [FaHtml5, FaCss3, FaJs, SiNextdotjs],
      },
      {
        title: "Reporting & REST Integration",
        icons: [FaFilePdf, TbApi, SiPostman],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Oracle APEX Developer - JK Group of Companies",
        stage: "2024 - Present",
      },
      {
        title: "APEX & PL/SQL Specialist - Saylani Welfare International Trust",
        stage: "2023 - 2024",
      },
      {
        title: "Enterprise Solutions Consultant - Freelance / Contract",
        stage: "2022 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Oracle APEX Certified Developer - Oracle University",
        stage: "2023",
      },
      {
        title: "BS Computer Science - GCUF",
        stage: "2024",
      },
      {
        title: "Advanced Database Architecture & PL/SQL Optimization",
        stage: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-92.5 pointer-events-none"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Engineering <span className="text-accent">mission-critical</span> systems.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-125 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            3+ years ago, I began engineering enterprise database applications.
            Since then, I've designed production ERP systems, automated multi-level
            approval workflows, and built batch PDF reporting engines powering daily operations.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* Uptime */}
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={99} duration={5} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Uptime &amp; Reliability
                </div>
              </div>

              {/* Production Systems */}
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Live ERP Systems
                </div>
              </div>

              {/* Modules */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={45} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Custom Modules Built
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-120"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 font-semibold`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0 text-white/90">{item.title}</div>
                <div className="hidden md:flex text-accent">-</div>
                <div className="text-accent font-medium">{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
