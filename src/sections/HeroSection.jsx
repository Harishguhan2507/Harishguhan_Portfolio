import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroBlob from "../assets/hero-blob.svg";
import heroPortrait from "../assets/HeroSectionImg.png";
import resumePdf from "../assets/Harishguhan_Muruganantham_Resume.pdf";

const heroPhrases = [
  "React | AWS | Python | Terraform",
  "Full-Stack Cloud Engineer",
  "Building scalable cloud-native applications",
];

const heroStats = [
  { label: "Experience", value: "4+ Years" },
  { label: "Specialty", value: "React + AWS + Python + Terraform" },
  { label: "Focus", value: "UI/UX, Performance, Scalable Systems" },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 text-slate-900 dark:text-slate-100 sm:py-20"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover opacity-40 
             bg-[center_80%]
             md:bg-[center_14%]"
          style={{ backgroundImage: `url(${heroPortrait})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/30 to-slate-900/40"
          aria-hidden
        />
        <div className="pointer-events-none absolute -top-16 right-10 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 w-[520px] -translate-x-1/2 opacity-40">
          <img src={heroBlob} alt="" className="w-full" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 text-slate-900 dark:text-slate-100">
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.5em] text-emerald-300/80"
        >
          Harishguhan · Software Engineer
        </motion.p>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold text-slate-900 md:text-6xl dark:text-white"
        >
          Harishguhan Muruganantham
        </motion.h1>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="rounded-full border border-emerald-500/70 px-4 py-1 text-xs uppercase tracking-[0.5em] text-emerald-300">
            Full-Stack Cloud Engineer
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={heroPhrases[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-base text-slate-600 dark:text-slate-300"
            >
              {heroPhrases[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl"
        >
          Building scalable cloud-native applications with strong UI/UX and
          clean architecture, focused on production-ready quality for modern
          product teams.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]"
          >
            View Projects
          </a>
          <a
            href={resumePdf}
            download="Harishguhan_Muruganantham_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-emerald-400 dark:border-white/30 dark:text-white"
          >
            Download Resume
          </a>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-emerald-500/10 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-500/80">
                {stat.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
