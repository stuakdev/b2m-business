import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useMeasure from "react-use-measure";
import logo1 from "./../assets/logoipsum-371.png";
import logo2 from "./../assets/logoipsum-376.png";
import logo3 from "./../assets/logoipsum-377.png";
import logo4 from "./../assets/logoipsum-379.png";
import logo5 from "./../assets/logoipsum-384.png";
import logo6 from "./../assets/logoipsum-386.png";
import logo7 from "./../assets/logoipsum-389.png";
import logo8 from "./../assets/logoipsum-392.png";
import logo9 from "./../assets/logoipsum-223.png";
import logo10 from "./../assets/logoipsum-231.png";
import logo11 from "./../assets/logoipsum-247.png";
import logo12 from "./../assets/logoipsum-280.png";
import logo13 from "./../assets/logoipsum-338.png";
import logo14 from "./../assets/logoipsum-355.png";
import logo15 from "./../assets/logoipsum-359.png";
import logo16 from "./../assets/logoipsum-365.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { testimonials } from "@/utils/Testimonial";

export default function Testimonial() {
  let [ref, { height }] = useMeasure();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const yTranslation = useMotionValue(0);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const logosRev = [logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];

  useEffect(() => {
    let controls;
    let finalPosition = -height / 2 + 16;

    controls = animate(yTranslation, [0, finalPosition * 2], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [yTranslation, height]);

  const yTranslationRev = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -height / 2 + 16;

    controls = animate(yTranslationRev, [finalPosition * 2, 0], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [yTranslationRev, height]);

  return (
    <section id="whatclientsays" className="bg-[#FAFAF4] overflow-hidden scroll-mt-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="w-full text-center max-w-[800px] justify-self-center xl:justify-self-end xl:self-center p-8 xl:p-24">
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
                delay: 0.25,
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#02033B] mb-4">What our users say</h2>
            <p className="text-lg text-gray-600 mb-10">Real stories from people who turned their business on sucess.</p>
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
                delay: 0.5,
              },
            }}
            viewport={{
              once: true,
            }}
            className="bg-white border-3 border-[#02033B] rounded-2xl px-6 md:px-12 py-8 shadow-md"
          >
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="text-left pt-2">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.designation}</p>
                      <p className="text-yellow-500 text-sm">★★★★★</p>
                    </div>
                    <p className="text-gray-700 text-lg mt-6">{`"${item.message}"`}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        <div className="bg-[#FFDEA8] w-full h-[70vh] md:h-[85vh] overflow-hidden flex justify-center gap-8 md:gap-16">
          <motion.div className="h-full flex flex-col items-center gap-8 md:gap-16" ref={ref} style={{ y: yTranslation }}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-32 sm:w-52 md:w-64 rounded-2xl min-h-32 sm:min-h-52 md:min-h-64 bg-white shadow-md"
              >
                <div className="w-3/5 overflow-hidden">
                  <img src={logo.src} alt="Client Logos" className="w-full h-auto text-center" />
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div className="h-full flex flex-col items-center gap-8 md:gap-16" style={{ y: yTranslationRev }}>
            {logosRev.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-32 sm:w-52 md:w-64 rounded-2xl min-h-32 sm:min-h-52 md:min-h-64 bg-white shadow-md"
              >
                <div className="w-3/5 overflow-hidden">
                  <img src={logo.src} alt="Client Logos" className="w-full h-auto text-center" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
