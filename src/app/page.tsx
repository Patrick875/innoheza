"use client";

import { Loader2Icon, MicroscopeIcon, PickaxeIcon, RocketIcon } from "lucide-react";
// import { Comme } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-mobile";
import { MobileNav } from "@/components/mobile-nav";
import { PulseCircle, HeartbeatLine, DNAHelix, HexagonPattern, MoleculeStructure, MedicalBackground } from "@/components/medical-graphics";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { sendEmail } from "@/actions";
import DonateModal from "@/components/DonateModal";

// Add smooth scrolling
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

// const comme = Comme({
//   subsets: ["latin"],
//   weight: "400",
// });

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const progressBarVariant = {
  hidden: { width: "0%" },
  visible: {
    width: "30%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { register, reset } = useForm()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    sendEmail(formRef.current, setIsSubmitting)
    reset()
  }

  return (
    <div className="relative overflow-hidden">
      <MedicalBackground />

      <main className="">
        <motion.nav className="w-full py-6 relative" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <HeartbeatLine className="right-0 top-0 hidden md:block" />
          <div className="w-[90%] mx-auto flex justify-between items-center shadow-gray-200/50 shadow-xl py-6 sticky top-0 ">
            <motion.p className="font-bold text-emerald-800 text-xl" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              INNOHEZA
            </motion.p>

            {/* Desktop Navigation */}
            <div className="hidden md:flex w-3/6 items-center justify-between">
              <motion.ul className="w-4/6 flex items-center justify-between" variants={staggerContainer} initial="hidden" animate="visible">
                {["about", "mission", "team", "donate", "contact"].map((item) => (
                  <motion.li key={item} variants={fadeIn}>
                    <Link href={`#${item}`} className="hover:text-emerald-700 transition-colors">
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                className="w-auto px-6 cursor-pointer py-3 rounded-[8px] text-white bg-teal-800"
                whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
              >
                Donate
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </motion.nav>

        <section id="about" className="min-h-[90vh] w-full flex flex-col relative ">
          <PulseCircle className="top-20 left-10 hidden md:block" />
          <MoleculeStructure className="bottom-20 right-10 hidden md:block" />

          <div className="flex-1 flex flex-col md:flex-row w-[90%] mx-auto">
            <motion.div
              className="min-h-full flex flex-col justify-center gap-8 py-8 md:py-0 md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}>
              <motion.h1
                className={` text-3xl md:text-xl ps-0 ms-0 lg:text-8xl font-bold leading-none tracking-tight text-gray-900`}
                variants={fadeIn}>
                Welcome to Innoheza
              </motion.h1>
              <motion.h2 className="text-xl md:text-[20px]" variants={fadeIn}>
                Innovation for Good, Africa in Mind
              </motion.h2>
              <motion.p className="text-sm md:text-lg" variants={fadeIn}>
                InnoHeza is a MedTech innovation company designing life-saving health technologies for and with African communities. Rooted in
                empathy, driven by science, and built for sustainability, we are on a mission to transform healthcare through impactful, affordable,
                and scalable solutions.
              </motion.p>
              <motion.button
                className="w-full cursor-pointer md:w-1/2 lg:w-1/4 p-3 rounded-[8px] text-white bg-teal-800 relative overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
                whileTap={{ scale: 0.95 }}
                variants={fadeIn}
                type='button'
                onClick={() => setOpen(true)}
              >
                DONATE
              </motion.button>
            </motion.div>
            <motion.div
              className="relative md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}>
              <PulseCircle className="absolute -top-10 -left-10 z-10 hidden md:block" />
              <Image
                src="/graphic-1.png"
                alt="PPH graphic-1"
                width={1200}
                height={800}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                className="relative z-0"
              />
            </motion.div>
          </div>
        </section>

        <section id="mission" className="w-full relative bg-teal-50  ">
          <HeartbeatLine className="left-0 top-20 hidden md:block" />
          <DNAHelix className="right-20 bottom-20 hidden md:block" />
          <div className="flex-1 w-[90%] mx-auto py-8 ">
            <motion.div
              className="flex flex-col min-h-[80vh] justify-center py-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}>
              <motion.h2 className="text-center  md:text-xl font-bold w-full py-6" variants={fadeIn}>
                What We are doing
              </motion.h2>
              <motion.h2 className="text-center text-3xl md:text-4xl font-bold w-full py-6 text-teal-700" variants={scaleIn}>
                We Are In A Mission To Help The Helpless
              </motion.h2>
              <motion.div className="mx-auto w-full  mt-4 flex-1 flex flex-col" variants={fadeIn}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
                  {[
                    {
                      icon: MicroscopeIcon,
                      title: "Identify Unmet Needs",
                      text: `We begin at the frontlines—immersing ourselves in hospitals, clinics, and communities to 
uncover the most pressing, overlooked health challenges`,
                    },
                    {
                      icon: PickaxeIcon,
                      title: "Invent Thoughtfully",
                      text: `We co-create solutions with users and experts. From ideation to prototyping, we design for 
usability, safety, and manufacturability.`,
                    },
                    {
                      icon: RocketIcon,
                      title: `Implement Sustainably`,
                      text: `We build scalable business models, form local partnerships, and work towards regulatory 
approvals to ensure long-term impact.`,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex gap-12 p-4 flex-col  justify-center  ${index == 1 ? " bg-teal-600 text-white " : "bg-white hover:bg-teal-600 "
                        }  rounded-lg shadow-sm border border-emerald-100 h-full group`}
                      variants={scaleIn}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        borderColor: "#10b981",
                      }}>
                      <div className=" p-2 rounded-full flex-shrink-0 flex justify-center">
                        <item.icon
                          size={isMobile ? 30 : 40}
                          className={`${index == 1 ? "text-white" : "text-emerald-600/80 group-hover:text-white"}   `}
                        />
                      </div>
                      <div className="text-center">
                        <h5
                          className={`text-xl md:text-2xl font-bold w-full pb-2 mb-8 ${index == 1 ? "text-white" : "text-emerald-600/80 group-hover:text-white"
                            } `}>
                          {item.title}
                        </h5>
                        <p className={`text-base  leading-8 ${index == 1 ? "text-white" : "text-black group-hover:text-white"}`}>{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="team" className="w-full relative min-h-[90vh] my-12">
          <HeartbeatLine className="right-0 top-20 hidden md:block" />
          <DNAHelix className="left-20 bottom-20 hidden md:block" />
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh]">
              <div className="flex flex-col md:flex-row   justify-between gap-6 mt-6">
                <motion.div
                  className="w-full md:w-1/2 p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}>
                  <h2 className="text-3xl md:text-4xl font-bold w-full py-6">About us</h2>
                  <p className="mt-4 leading-7 text-justify md:text-lg pb-6">
                    InnoHeza is a health innovation startup developing life-saving medical technologies tailored for low-resource settings. Our
                    flagship solution addresses postpartum hemorrhage (PPH), a leading cause of maternal death, with an effective, affordable, and
                    user-friendly uterine management device. Designed with frontline healthcare workers in mind, InnoHeza bridges the gap between
                    global innovation and the realities of under-resourced health systems. We work closely with local hospitals, providers, and
                    regulators to ensure our solutions are accessible, impactful, and grounded in the needs of the communities we serve.
                  </p>
                  <div className="grid grid-cols-4 gap-6 w-full mt-4">
                    <div className="col-span-2 my-2 bg-teal-600 text-white rounded-[8px] p-4 py-6">
                      <h2 className="text-xl md:text-2xl font-bold w-full py-6 text-center">Our Mission</h2>
                      <p className="mt-4 leading-7    text-center">
                        To develop innovative, context-driven health technologies that save lives and improve health outcomes in resource-limited
                        settings—starting with maternal and child health.
                      </p>
                    </div>
                    <div className="col-span-2 my-2  border-[1.5px] border-teal-600/20 rounded-[8px] p-4">
                      <h2 className="text-xl md:text-2xl font-bold w-full py-6 text-teal-600 text-center">Our Vision</h2>
                      <p className="mt-4 leading-7 text-center">
                        Leading the charge to a healthier tomorrow where everyone, everywhere, can access life
                        saving technologies. A world where no life is lost due to lack of access to appropriate medical technologies.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/3 p-4 flex flex-col gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}>
                  <h2 className="text-3xl md:text-4xl font-bold w-full py-6">Meet our Team</h2>

                  {[
                    { icon: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3", name: "Dr. Salsawit Tesfaye", title: "CEO" },
                    {
                      icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25m0 0a2.25 2.25 0 002.25 2.25m0 0v-1.5a2.25 2.25 0 00-2.25-2.25M18 9.75v-1.5m0 1.5c1.24.3 2.25.97 2.25 2.25M18 9.75l-1.5.75",
                      name: "Dr. Bertrand Kwizera",
                      title: "Co-Founder, Chief Medical Officer",
                    },
                    {
                      icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
                      name: "Eng. Basil Masabo",
                      title: "Co-Founder, Chief Technology Officer",
                    },
                  ].map((person, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-3 items-center bg-white p-4 rounded-lg shadow-sm border border-emerald-100"
                      variants={fadeIn}
                      whileHover={{ x: 10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", borderColor: "#10b981" }}>
                      <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-700">
                          <path d={person.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-xl md:text-2xl font-bold w-full pb-2 text-emerald-700">{person.name}</h5>
                        <p className="text-base md:text-lg">{person.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="relative bg-teal-50">
          <PulseCircle className="bottom-10 left-10 hidden md:block" />
          <HexagonPattern className="right-0 bottom-0 hidden md:block" />

          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh] pt-12">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <motion.div
                  className="w-full md:w-1/2 p-4 flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}>
                  <motion.h2 className="text-3xl md:text-4xl font-bold w-full py-8" variants={fadeIn}>
                    <span className="bg-gradient-to-r from-[#22c55e] to-[#052e16] bg-clip-text text-transparent">Help us to save lives the of</span>
                    <span className="bg-gradient-to-r from-[#16a34a] to-emerald-900 bg-clip-text text-transparent"> our mothers and children</span>
                  </motion.h2>

                  <motion.p className="mt-4 leading-7 md:leading-10 text-base md:text-lg text-justify" variants={fadeIn}>
                    We are a team of engineers, doctors, and business professionals with a passion for improving maternal health. We are committed to
                    developing innovative solutions that will save lives and improve the quality of care for mothers and their babies.
                  </motion.p>
                  <motion.div className="mt-6" variants={fadeIn}>
                    <div className="mb-4">
                      <div className="text-gray-300 font-semibold flex justify-between py-2">
                        <p className="">USD 0</p>
                        <p className="">USD 30,000</p>
                      </div>
                      <div className="h-6 w-full rounded-full bg-emerald-700/10">
                        <motion.div className="h-full bg-emerald-700 rounded-full" variants={progressBarVariant}></motion.div>
                      </div>
                    </div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-12" variants={staggerContainer}>
                      {[
                        { value: "USD 30k", label: "Target" },
                        { value: "180", label: "Days left" },
                        { value: "1080", label: "Donations" },
                      ].map((item, index) => (
                        <motion.button
                          key={index}
                          className="border-[1.5px] cursor-pointer border-emerald-700 rounded-[16px] text-center min-h-[15vh] flex flex-col justify-center p-4 bg-white"
                          variants={scaleIn}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}>
                          <p className="text-xl md:text-2xl text-emerald-700 font-semibold">{item.value}</p>
                          <p className="mt-3 text-base md:text-lg text-emerald-700">{item.label}</p>
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                  <motion.div className="mt-8 md:mt-12" variants={fadeIn}>
                    <motion.button
                      className="w-full cursor-pointer md:w-1/3 p-3 border-[2px] text-teal-800 rounded-[8px] border-teal-800 relative overflow-hidden"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setOpen(true)}
                    >
                      DONATE NOW
                    </motion.button>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4 pt-0 flex flex-col gap-6 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}>
                  <PulseCircle className="absolute -top-10 -right-10 z-10 hidden md:block" />
                  <Image
                    src="/graphic-2.png"
                    alt="PPH graphic-2"
                    width={1200}
                    height={500}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    priority={true}
                    className="relative z-0"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative my-12">
          <HeartbeatLine className="left-0 bottom-20 hidden md:block" />
          <MoleculeStructure className="right-20 top-20 hidden md:block" />

          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh] py-12">
              <div className="flex flex-col md:flex-row justify-between gap-6 py-4">
                <motion.div
                  className="w-full md:w-1/2 px-4 flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}>
                  <h2 className="text-3xl md:text-4xl font-bold w-full pb-6">Contact us</h2>
                  <p className="mt-4 leading-7 md:leading-10 text-lg md:text-xl text-justify">For more information, please contact us at:</p>
                  <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="mailto:info@innoheza.com" className="underline text-emerald-800 font-semibold">
                      info@innoheza.com
                    </Link>
                  </motion.div>

                  {/* Contact information */}
                  <div className="mt-8 space-y-4">
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100"
                      whileHover={{ x: 5, borderColor: "#10b981" }}>
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">info@innoheza.com</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100"
                      whileHover={{ x: 5, borderColor: "#10b981" }}>
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">+250794102418</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100"
                      whileHover={{ x: 5, borderColor: "#10b981" }}>
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Kigali, Rwanda</span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4 pt-0 flex flex-col gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}>
                  <form ref={formRef} onSubmit={submit} className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
                    <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
                      <motion.div className="flex flex-col md:flex-row gap-4 items-start md:items-center" variants={fadeIn}>
                        <div className="w-full md:w-1/2">
                          <label className="text-lg md:text-xl text-emerald-700 block my-2">First name</label>
                          <motion.input
                            type="text"
                            {...register('firstName')}
                            placeholder="First name"
                            className="border-[1.5px] border-emerald-700 rounded-[8px] p-2 block w-full"
                            whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                          />
                        </div>
                        <div className="w-full md:w-1/2">
                          <label className="text-lg md:text-xl text-emerald-700 block my-2">Last name</label>
                          <motion.input
                            type="text"
                            {...register('lastName')}
                            placeholder="Last name"
                            className="border-[1.5px] border-emerald-700 rounded-[8px] p-2 block w-full"
                            whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                          />
                        </div>
                      </motion.div>
                      <motion.div variants={fadeIn}>
                        <label className="text-lg md:text-xl text-emerald-700 block my-2">Email</label>
                        <motion.input
                          type="email"
                          {...register('email')}
                          placeholder="Your email"
                          className="border-[1.5px] border-emerald-700 rounded-[8px] p-2 block w-full"
                          whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                        />
                      </motion.div>
                      <motion.div variants={fadeIn}>
                        <label className="text-lg md:text-xl text-emerald-700 block">Write a message</label>
                        <motion.textarea
                          placeholder="Your message"
                          {...register('message')}
                          className="border-[1.5px] border-emerald-700 rounded-[16px] p-2 h-[20vh] w-full block"
                          whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}></motion.textarea>
                      </motion.div>
                      <motion.button
                        className="w-full p-3 border-[2px] text-white rounded-[8px] bg-teal-800 flex  justify-center gap-4 items-center"
                        whileHover={{ scale: 1.02, backgroundColor: "#115e59" }}
                        whileTap={{ scale: 0.98 }}
                        variants={fadeIn}>
                        SEND
                        {isSubmitting && (
                          <Loader2Icon className='animate-spin rotate' />
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <motion.footer
        className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-6 min-h-[8vh] bg-emerald-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <HeartbeatLine className="left-0 top-0 opacity-10 w-full hidden md:block" />
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <p className="text-sm text-center md:text-left">© 2025 INNOHEZA. All rights reserved.</p>

          {/* Social media icons */}
          <div className="flex gap-4">
            {[
              "M22 4h-4a4 4 0 0 0-4 4v4h-4v4h4v8h4v-8h4l1-4h-5v-3a1 1 0 0 1 1-1h4z",
              "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
              "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
              "M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69c-2.67.6-3.22-1.29-3.22-1.29-.44-1.11-1.08-1.4-1.08-1.4-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.47 2.26 1.04 2.8.8.09-.62.35-1.05.63-1.29-2.2-.25-4.51-1.11-4.51-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10 10 0 0 0 12 2z",
            ].map((path, index) => (
              <motion.a key={index} href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors" whileHover={{ y: -3 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
      {open && <DonateModal onClose={() => setOpen(false)} />}
    </div>
  );
}
