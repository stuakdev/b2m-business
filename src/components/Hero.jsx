import { motion } from "framer-motion";
import heroGroupImg from "../assets/hero group.png";

export default function Hero() {
  return (
    <section className="bg-[#FFDEAA] overflow-hidden py-2 md:py-28 px-4 sm:ps-8 lg:ps-20 inset-0 lg:bg-[url('../assets/header.png')] bg-no-repeat bg-left md:bg-cover">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
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
            },
          }}
          viewport={{
            once: true,
          }}
          className="min-h-[65vh] flex flex-col justify-center text-center lg:text-left z-10"
        >
          <h1 className="text-4xl md:text-6xl xl:text-6xl font-extrabold text-[#02033B] leading-tight mb-6">
            Smart, Affordable
            <br />
            Bookkeeping &<br />
            Accounting Solutions
          </h1>
          <p className="text-[#02033B] text-lg mb-8 lg:max-w-xl">
            Helping small and medium businesses grow with reliable, end-to-end financial services in person or online.
          </p>

          <div className="flex flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button
              initial={{
                opacity: 0,
                translateY: "100px",
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.25,
                  delay: 0.75,
                },
              }}
              viewport={{
                once: true,
              }}
              className="bg-[#02033B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1618b9] hover:scale-105 hover:cursor-pointer"
            >
              Contact
            </motion.button>
            <motion.button
              initial={{
                opacity: 0,
                translateY: "100px",
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.25,
                  delay: 1,
                },
              }}
              viewport={{
                once: true,
              }}
              className="border border-[#02033B] text-[#02033B] px-6 py-3 rounded-full font-semibold hover:bg-[#e8e8ff] hover:scale-105 hover:cursor-pointer"
            >
              Whatsapp
            </motion.button>
          </div>
        </motion.div>

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
              delay: 0.5,
            },
          }}
          viewport={{
            once: true,
          }}
          className="relative flex flex-col gap-3 text-sm pb-28 md:pb-10 sm:text-base justify-self-start"
        >
          <div>
            <img src={heroGroupImg.src} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
