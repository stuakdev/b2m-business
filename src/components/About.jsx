import { motion } from "framer-motion";
import aboutImg from "./../assets/about.png";

const About = () => {
  return (
    <section id="whoweare" className="bg-[#FFFAF1] py-16 md:py-24 scroll-mt-10">
      <div className="max-w-[96rem] mx-auto px-6 flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-8">
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
          className="relative w-full max-w-md md:max-w-[400px]"
        >
          <img src={aboutImg.src} alt="Smiling Woman" className="w-full h-auto object-cover" />
        </motion.div>

        <div className="max-w-lg space-y-4 md:self-start md:text-right">
          <motion.h2
            initial={{
              opacity: 0,
              translateY: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.5,
                delay: 0.5
              },
            }}
            viewport={{
              once: true,
            }}
            className="text-[#02033B] text-4xl lg:text-5xl font-extrabold py-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              translateY: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.75,
                 delay: 0.75
              },
            }}
            viewport={{
              once: true,
            }}
            className="text-[#02033B] text-xl leading-relaxed md:py-8"
          >
            At B2M Business Solution, we provide cost-effective bookkeeping and accounting services tailored for small
            and medium businesses. Whether face-to-face or virtual, our tech-enabled solutions ensure your business
            finances stay organized, compliant, and ready for growth. We understand the unique challenges businesses
            face that's why we offer personal, professional support that adapts to your needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
