import { motion } from "framer-motion";
import handshakeImg from "../assets/handshake.png";
import discussionImg from "../assets/discussion.png";

export default function Services() {
  return (
    <section id="whyb2m" className="bg-[#FFDEAA] py-16 scroll-mt-10">
      <div className="max-w-[96rem] mx-auto w-full px-6 py-16 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#02033B] pb-6">Why Businesses Trust B2M</h2>
          <p className="text-lg text-[#4a4a4a] max-w-xl mx-auto">
            Delivering reliable, affordable, and personalised financial solutions designed for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:items-center">
          <motion.div
            initial={{
              opacity: 0,
              translateX: "-100px",
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            viewport={{
              once: true,
            }}
            className="bg-[#02033B] text-white rounded-[999px] min-h-[536px] w-full sm:min-w-[300px] px-12 max-w-sm py-28 flex items-center justify-center text-left mx-auto"
          >
            <div>
              <h3 className="text-4xl font-semibold text-[#FFDF65] leading-12 mb-2">
                Affordable and Transparent Pricing
              </h3>
              <p className="pt-8 text-2xl">
                Clear, upfront pricing with no hidden fees, perfect for small and growing businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "linear",
                duration: 0.5,
                delay: 0.75,
              },
            }}
            viewport={{
              once: true,
            }}
            className="w-full max-w-sm aspect-square rounded-full overflow-hidden mx-auto"
          >
            <img src={handshakeImg.src} alt="Proven Expertise" className="object-cover w-full h-full" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              translateX: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
            viewport={{
              once: true,
            }}
            className="w-full flex items-center max-w-sm mx-auto text-[#0C205B] text-center md:text-left pt-8"
          >
            <div>
              <h3 className="text-4xl font-semibold md:leading-12 mb-2">Proven Expertise</h3>
              <p className="pt-4 md:pt-8 text-lg md:text-2xl">
                We use trusted systems to deliver accurate, reliable results every time.
              </p>
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
            className="w-full flex items-center max-w-sm mx-auto text-[#0C205B] text-center md:text-left py-8"
          >
            <div>
              <h3 className="text-4xl font-semibold md:leading-12 mb-2 leading-12">
                Built for Small & Medium Businesses
              </h3>
              <p className="pt-4 md:pt-8 text-lg md:text-2xl">
                Services tailored to fit your business size, goals, and budget.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "linear",
                duration: 0.5,
                delay: 0.75,
              },
            }}
            viewport={{
              once: true,
            }}
            className="w-full max-w-sm aspect-square rounded-full overflow-hidden mx-auto"
          >
            <img src={discussionImg.src} alt="Proven Expertise" className="object-cover w-full h-full" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              translateX: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
            viewport={{
              once: true,
            }}
            className="bg-[#02033B] text-white rounded-[999px] min-h-[536px] w-full sm:min-w-[300px] px-12 max-w-sm py-28 flex items-center justify-center text-left mx-auto"
          >
            <div>
              <h3 className="text-4xl font-semibold text-[#FFDF65] leading-12 mb-2">Personalised Support</h3>
              <p className="pt-8 text-2xl">Work with us online or in person - your convenience, your choice.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
