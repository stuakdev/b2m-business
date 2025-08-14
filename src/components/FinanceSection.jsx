import { motion } from "framer-motion";

const FinanceSection = () => {
  return (
    <section className="relative bg-[#0C205B] text-white py-20 px-6 flex items-center justify-center min-h-[400px] text-center overflow-hidden scroll-mt-10">
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{
            opacity: 0,
            translateY: "100px",
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.5,
              delay: 0.25,
            },
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Struggling to stay on top of your business finances?
          </h1>

          <p className="font-semibold text-lg text-white mb-1">Let B2M simplify your books</p>
          <p className="text-lg text-white/80 mb-8">Accurate, Affordable, and Stress-Free.</p>
        </motion.div>

        <motion.a
          initial={{
            opacity: 0,
            translateY: "100px",
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          viewport={{
            once: true,
          }}
          href="mailto:rathika@b2mbs.com"
          className="bg-[#FFB540] text-[#02033B] font-semibold px-6 py-3 rounded-full shadow hover:cursor-pointer transition-transform ease-linear hover:scale-105 inline-flex items-center gap-2">
          Talk to an Expert
          <span className="text-xl">→</span>
        </motion.a>
      </div>

      <div className="absolute inset-0 bg-[url('../assets/ecclipse.png')] bg-no-repeat bg-contain bg-right z-0"></div>
    </section>
  );
};

export default FinanceSection;
