import { motion } from "framer-motion";
import { BrainCircuit, HeartHandshake, Notebook, ScanEye } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-gradient-to-b from-[#FFDEA8] to-[#FAFAF4] py-16 md:pt-24 px-4 scroll-mt-10">
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
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#02033B] mb-4">How We Work</h2>
        <p className="text-[#334155] text-lg">
          We make managing your business finances easy with a streamlined process designed to save you time and money.
        </p>
      </motion.div>

      <div className="bg-white rounded-3xl shadow-lg max-w-5xl mx-auto p-10">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-y-12 gap-x-10 text-center">
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
            className="flex flex-col items-center md:max-w-46"
          >
            <p className="font-bold text-sm text-[#0F172A] mb-2">STEP 1</p>
            <div className="w-fit border-2 border-[#02033B] p-2 rounded-xl">
              <ScanEye className="mx-auto" color="#02033B" size={46} />
            </div>
            <h3 className="font-semibold text-[#0F172A] mt-4 mb-2">Free Consultation</h3>
            <p className="text-sm text-[#334155]">
              We start by understanding your business and financial needs – no obligations.
            </p>
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
                delay: 0.60,
              },
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center md:max-w-46"
          >
            <p className="font-bold text-sm text-[#0F172A] mb-2">STEP 2</p>
            <div className="w-fit border-2 border-[#02033B] p-2 rounded-xl">
              <BrainCircuit className="mx-auto" color="#02033B" size={46} />
            </div>
            <h3 className="font-semibold text-[#0F172A] mt-4 mb-2">System Setup & Handover</h3>
            <p className="text-sm text-[#334155]">We configure your accounting tools and streamline your processes.</p>
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
                delay: 0.70,
              },
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center md:max-w-46"
          >
            <p className="font-bold text-sm text-[#0F172A] mb-2">STEP 3</p>
            <div className="w-fit border-2 border-[#02033B] p-2 rounded-xl">
              <Notebook className="mx-auto" color="#02033B" size={46} />
            </div>
            <h3 className="font-semibold text-[#0F172A] mt-4 mb-2">Regular Bookkeeping & Reporting</h3>
            <p className="text-sm text-[#334155]">
              We handle the numbers so you can focus on your business, with monthly reports and insights.
            </p>
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
                delay: 0.8,
              },
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center md:max-w-46"
          >
            <p className="font-bold text-sm text-[#0F172A] mb-2">STEP 4</p>
            <div className="w-fit border-2 border-[#02033B] p-2 rounded-xl">
              <HeartHandshake className="mx-auto" color="#02033B" size={46} />
            </div>
            <h3 className="font-semibold text-[#0F172A] mt-4 mb-2">Ongoing Support</h3>
            <p className="text-sm text-[#334155]">
              From payroll to BAS we’re just a call or message away, whenever you need help.
            </p>
          </motion.div>
        </div>
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
              delay: 0.9,
            },
          }}
          viewport={{
            once: true,
          }}
          className="flex justify-center mt-10"
        >
          <a href="/#contact" className="border border-[#02033B] text-[#02033B] px-6 py-2 rounded-full font-semibold hover:bg-[#02033B] hover:scale-105 hover:text-white hover:cursor-pointer transition">
            Reach Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
