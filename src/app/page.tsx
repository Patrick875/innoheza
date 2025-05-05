"use client"

import { BabyIcon, SliceIcon, UsersIcon } from "lucide-react"
import { Quattrocento } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-mobile"
import { MobileNav } from "@/components/mobile-nav"
import {
  PulseCircle,
  HeartbeatLine,
  DNAHelix,
  MedicalCross,
  HexagonPattern,
  MoleculeStructure,
  DataGraph,
  MedicalBackground,
} from "@/components/medical-graphics"

// Add smooth scrolling
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth"
}

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: "400",
})

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const progressBarVariant = {
  hidden: { width: "0%" },
  visible: {
    width: "30%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
}

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="relative overflow-hidden">
      <MedicalBackground />

      <main className="">
        <motion.nav
          className="w-full py-6 relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeartbeatLine className="right-0 top-0 hidden md:block" />
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <motion.p
              className="font-bold text-emerald-800 text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              INNOHEZA
            </motion.p>

            {/* Desktop Navigation */}
            <div className="hidden md:flex w-4/6 items-center justify-between">
              <motion.ul
                className="w-4/6 flex items-center justify-between"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {["about", "mission", "product", "team", "donate", "contact"].map((item) => (
                  <motion.li key={item} variants={fadeIn}>
                    <Link href={`#${item}`} className="hover:text-emerald-700 transition-colors">
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                className="w-auto px-6 py-3 rounded-[8px] text-white bg-teal-800"
                whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
                whileTap={{ scale: 0.95 }}
              >
                Donate
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </motion.nav>

        <section id="about" className="min-h-[90vh] w-full flex flex-col relative">
          <PulseCircle className="top-20 left-10 hidden md:block" />
          <MoleculeStructure className="bottom-20 right-10 hidden md:block" />

          <div className="flex-1 flex flex-col md:flex-row w-[90%] mx-auto">
            <motion.div
              className="min-h-full flex flex-col justify-center gap-8 py-8 md:py-0 md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <motion.h4 className="text-xl md:text-2xl" variants={fadeIn}>
                A quick control of abnormal postpartum uterine bleeding.
              </motion.h4>
              <motion.h1
                className={`${quattrocento.className} mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900`}
                variants={fadeIn}
              >
                Reimagining PPH Care
              </motion.h1>
              <motion.h4 className="text-xl md:text-2xl" variants={fadeIn}>
                We help frontline providers respond quickly and confidently when every second counts.
              </motion.h4>
              <motion.button
                className="w-full md:w-1/2 lg:w-1/4 p-3 rounded-[8px] text-white bg-teal-800 relative overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
                whileTap={{ scale: 0.95 }}
                variants={fadeIn}
              >
                DONATE
              </motion.button>
            </motion.div>
            <motion.div
              className="relative md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
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

        <section id="mission" className="w-full relative">
          <HeartbeatLine className="left-0 top-20 hidden md:block" />
          <DNAHelix className="right-20 bottom-20 hidden md:block" />

          <div className="flex-1 w-[90%] mx-auto">
            <motion.div
              className="flex flex-col min-h-[30vh] justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <motion.h2 className="text-center text-3xl md:text-4xl font-bold w-full py-6" variants={fadeIn}>
                Our Mission
              </motion.h2>
              <motion.div className="mx-auto w-full md:w-[75%] mt-4" variants={fadeIn}>
                <p className="text-center text-lg md:text-xl">
                  INNOHEZA is a medical device startup committed to saving the lives of mothers with innovative products
                  that allow for rapid postpartum hemorrhage intervention.
                </p>
              </motion.div>
            </motion.div>
            <div className="flex flex-col justify-center min-h-[50vh]">
              <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
                <motion.div
                  className="w-full md:w-1/2 p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}
                >
                  <h2 className="text-3xl md:text-4xl font-bold w-full py-6">Postpartum Hemorrhaging</h2>
                  <p className="mt-4 leading-7 md:leading-10 text-base md:text-lg text-justify">
                    If the uterine muscles do not contract sufficiently after childbirth (Uterine Atony), very heavy
                    bleeding (postpartum hemorrhage) can occur. This can be life threatening. Post hemorrhage usually
                    occurs within 24hrs of childbirth, with 80% caused by uterine atony.
                  </p>

                  {/* Added data visualization */}
                  <div className="mt-8 relative h-40 hidden md:block">
                    <DataGraph className="left-0 top-0" />
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: BabyIcon, title: `${Number(140.1)} M`, text: "Births in 2020" },
                      {
                        icon: SliceIcon,
                        title: `${Number(10.8)} %`,
                        text: "~ 15+ M of women experience PPH during childbirth.",
                      },
                      {
                        icon: UsersIcon,
                        title: "1% Fatality rate",
                        text: "With a 1% fatality rate, 150,000+ women will die each year due to PPH",
                      },
                      {
                        icon: BabyIcon,
                        title: "170,000+ Children at risk",
                        text: "With this 170,000+ chidren experience early childhood without their mothers.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-emerald-100"
                        variants={scaleIn}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          borderColor: "#10b981",
                        }}
                      >
                        <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
                          <item.icon size={isMobile ? 30 : 40} className="text-emerald-700" />
                        </div>
                        <div>
                          <h5 className="text-xl md:text-2xl font-bold w-full pb-2 text-emerald-700">{item.title}</h5>
                          <p className="text-base md:text-lg">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="w-full relative">
          <HexagonPattern className="top-10 right-10 hidden md:block" />
          <MedicalCross className="bottom-10 left-10 hidden md:block" />

          <div className="flex-1 w-[90%] mx-auto">
            <motion.div
              className="flex flex-col justify-center min-h-[20vh]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="p-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold w-full py-6 text-center" variants={fadeIn}>
                  The Solution
                </motion.h2>
                <motion.p className="mt-4 leading-7 md:leading-10 text-base md:text-lg text-center" variants={fadeIn}>
                  If the uterine muscles do not contract sufficiently after childbirth (Uterine Atony), very heavy
                  bleeding (postpartum hemorrhage) can occur. This can be life threatening. Post hemorrhage usually
                  occurs within 24hrs of childbirth, with 80% caused by uterine atony.
                </motion.p>
              </div>
            </motion.div>

            {/* Product showcase with medical-themed cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Quick Response Kit",
                  description:
                    "Our flagship product designed for immediate intervention in postpartum hemorrhage cases.",
                  icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
                },
                {
                  title: "Training Program",
                  description:
                    "Comprehensive training for healthcare providers on PPH management and our intervention tools.",
                  icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
                },
                {
                  title: "Monitoring System",
                  description: "Advanced monitoring tools to detect early signs of postpartum hemorrhage.",
                  icon: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 flex flex-col items-center text-center"
                  variants={scaleIn}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-emerald-700"
                    >
                      <path
                        d={product.icon}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <motion.button className="mt-4 text-emerald-700 font-medium flex items-center" whileHover={{ x: 5 }}>
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="team" className="w-full relative">
          <HeartbeatLine className="right-0 top-20 hidden md:block" />
          <DNAHelix className="left-20 bottom-20 hidden md:block" />

          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh]">
              <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
                <motion.div
                  className="w-full md:w-1/2 p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}
                >
                  <h2 className="text-3xl md:text-4xl font-bold w-full py-6">About us</h2>
                  <p className="mt-4 leading-7 md:leading-10 text-lg md:text-xl text-justify">
                    Together, the team behind INNOHEZA Medical shares over 80 years of successful Medical Device
                    Development Experience.
                  </p>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4 flex flex-col gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  {[
                    { icon: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3", name: "Dr. John Doe", title: "CEO" },
                    {
                      icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25m0 0a2.25 2.25 0 002.25 2.25m0 0v-1.5a2.25 2.25 0 00-2.25-2.25M18 9.75v-1.5m0 1.5c1.24.3 2.25.97 2.25 2.25M18 9.75l-1.5.75",
                      name: "Dr. John Doe",
                      title: "Co-Founder, Chief Executive Officer",
                    },
                    {
                      icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
                      name: "Eng. Who Strange",
                      title: "Co-Founder, Chief Technology Officer",
                    },
                    {
                      icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
                      name: "Dr. Murphy Doe",
                      title: "Co-Founder, VP of Operations",
                    },
                  ].map((person, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-3 items-center bg-white p-4 rounded-lg shadow-sm border border-emerald-100"
                      variants={fadeIn}
                      whileHover={{ x: 10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", borderColor: "#10b981" }}
                    >
                      <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-emerald-700"
                        >
                          <path
                            d={person.icon}
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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

        <section id="donate" className="relative">
          <PulseCircle className="bottom-10 left-10 hidden md:block" />
          <HexagonPattern className="right-0 bottom-0 hidden md:block" />

          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh]">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <motion.div
                  className="w-full md:w-1/2 p-4 flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}
                >
                  <motion.h2 className="text-3xl md:text-4xl font-bold w-full py-6" variants={fadeIn}>
                    <span className="bg-gradient-to-r from-[#22c55e] to-[#052e16] bg-clip-text text-transparent">
                      Help us to save lives the of
                    </span>
                    <span className="bg-gradient-to-r from-[#16a34a] to-emerald-900 bg-clip-text text-transparent">
                      {" "}
                      our mothers and children
                    </span>
                  </motion.h2>
                  <motion.p className="mt-4 leading-7 md:leading-10 text-lg md:text-xl text-justify" variants={fadeIn}>
                    Together, the team behind INNOHEZA Medical shares over 80 years of successful Medical Device
                    Development Experience.
                  </motion.p>
                  <motion.p
                    className="mt-4 leading-7 md:leading-10 text-base md:text-lg text-justify"
                    variants={fadeIn}
                  >
                    We are a team of engineers, doctors, and business professionals with a passion for improving
                    maternal health. We are committed to developing innovative solutions that will save lives and
                    improve the quality of care for mothers and their babies.
                  </motion.p>
                  <motion.div className="mt-6" variants={fadeIn}>
                    <div className="mb-4">
                      <div className="text-gray-300 font-semibold flex justify-between py-2">
                        <p className="">USD 0</p>
                        <p className="">USD 30,000</p>
                      </div>
                      <div className="h-6 w-full rounded-full bg-emerald-700/10">
                        <motion.div
                          className="h-full bg-emerald-700 rounded-full"
                          variants={progressBarVariant}
                        ></motion.div>
                      </div>
                    </div>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-12"
                      variants={staggerContainer}
                    >
                      {[
                        { value: "USD 30k", label: "Target" },
                        { value: "180", label: "Days left" },
                        { value: "1080", label: "Donations" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="border-[1.5px] border-emerald-700 rounded-[16px] text-center min-h-[15vh] flex flex-col justify-center p-4 bg-white"
                          variants={scaleIn}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                        >
                          <p className="text-xl md:text-2xl text-emerald-700 font-semibold">{item.value}</p>
                          <p className="mt-3 text-base md:text-lg text-emerald-700">{item.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                  <motion.div className="mt-8 md:mt-12" variants={fadeIn}>
                    <motion.button
                      className="w-full md:w-1/3 p-3 border-[2px] text-teal-800 rounded-[8px] border-teal-800 relative overflow-hidden"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
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
                  variants={slideInRight}
                >
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

        <section id="contact" className="relative">
          <HeartbeatLine className="left-0 bottom-20 hidden md:block" />
          <MoleculeStructure className="right-20 top-20 hidden md:block" />

          <div className="w-[90%] mx-auto">
            <div className="flex flex-col justify-center min-h-[50vh]">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <motion.div
                  className="w-full md:w-1/2 p-4 flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInLeft}
                >
                  <h2 className="text-3xl md:text-4xl font-bold w-full py-6">Contact us</h2>
                  <p className="mt-4 leading-7 md:leading-10 text-lg md:text-xl text-justify">
                    For more information, please contact us at:
                  </p>
                  <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="mailto:info@innoheza.com" className="underline text-emerald-800 font-semibold">
                      info@innoheza.com
                    </Link>
                  </motion.div>

                  {/* Contact information */}
                  <div className="mt-8 space-y-4">
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100"
                      whileHover={{ x: 5, borderColor: "#10b981" }}
                    >
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
                      whileHover={{ x: 5, borderColor: "#10b981" }}
                    >
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
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100"
                      whileHover={{ x: 5, borderColor: "#10b981" }}
                    >
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
                      <span className="text-gray-700">123 Medical Drive, Health City, HC 12345</span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4 pt-0 flex flex-col gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  <form className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
                    <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
                      <motion.div
                        className="flex flex-col md:flex-row gap-4 items-start md:items-center"
                        variants={fadeIn}
                      >
                        <div className="w-full md:w-1/2">
                          <label className="text-lg md:text-xl text-emerald-700 block my-2">First name</label>
                          <motion.input
                            type="text"
                            placeholder="First name"
                            className="border-[1.5px] border-emerald-700 rounded-[8px] p-2 block w-full"
                            whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                          />
                        </div>
                        <div className="w-full md:w-1/2">
                          <label className="text-lg md:text-xl text-emerald-700 block my-2">Last name</label>
                          <motion.input
                            type="text"
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
                          placeholder="Your email"
                          className="border-[1.5px] border-emerald-700 rounded-[8px] p-2 block w-full"
                          whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                        />
                      </motion.div>
                      <motion.div variants={fadeIn}>
                        <label className="text-lg md:text-xl text-emerald-700 block">Write a message</label>
                        <motion.textarea
                          placeholder="Your message"
                          className="border-[1.5px] border-emerald-700 rounded-[16px] p-2 h-[20vh] w-full block"
                          whileFocus={{ boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)" }}
                        ></motion.textarea>
                      </motion.div>
                      <motion.button
                        className="w-full p-3 border-[2px] text-white rounded-[8px] bg-teal-800"
                        whileHover={{ scale: 1.02, backgroundColor: "#115e59" }}
                        whileTap={{ scale: 0.98 }}
                        variants={fadeIn}
                      >
                        SEND
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
        viewport={{ once: true }}
      >
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
              <motion.a
                key={index}
                href="#"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ y: -3 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
