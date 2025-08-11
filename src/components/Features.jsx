import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardImg1 from "../assets/card-img1.png";
import cardImg2 from "../assets/card-img2.png";
import cardImg3 from "../assets/card-img3.png";
import cardImg4 from "../assets/card-img4.png";
import cardImg5 from "../assets/card-img5.png";
import cardImg6 from "../assets/card-img6.png";
import cardImg7 from "../assets/card-img7.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export default function Features() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      title: "End-to-End Bookkeeping",
      icon: cardImg1.src,
    },
    {
      title: "Bank Reconciliations",
      icon: cardImg2.src,
    },
    {
      title: "Payroll Services",
      icon: cardImg3.src,
    },
    {
      title: "Financial reporting",
      icon: cardImg4.src,
    },
    {
      title: "Debtor Management",
      icon: cardImg5.src,
    },
    {
      title: "System Setup & Support",
      icon: cardImg6.src,
    },
    {
      title: "BAS Lodgement",
      icon: cardImg7.src,
    },
  ];

  return (
    <section id="whatwedo" className="bg-gradient-to-b from-[#FFFAF2] to-[#FFDEAA] scroll-mt-10">
      <div className="max-w-[1800px] mx-auto px-6 py-16">
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-[#02033B] text-4xl lg:text-5xl font-extrabold pb-6">What We Do</h2>
          <p className="text-lg text-black font-semibold md:mt-3">Let B2M simplify your books</p>
          <p className="text-lg text-gray-600 md:mt-2">Accurate, Affordable, and Stress-Free.</p>
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
          className="flex space-x-6 px-4"
        >
          <Carousel plugins={[plugin.current]} className="w-full max-w-[1600px] mx-auto">
            <CarouselContent className="-ml-1 flex">
              {cards.map((item, index) => (
                <CarouselItem key={index} className={cn(`${index === 0 ? "px-0" : "pl-4"} md:basis-1/2 xl:basis-1/3`)}>
                  <div className="p-1">
                    <div
                      className={`card-${
                        index + 1
                      } min-w-[320px] h-[250px] rounded-3xl border border-[#000c3f] shadow-[0_5px_0_0_rgb(0,12,63)] p-8 md:p-8 py-12 flex justify-between`}
                    >
                      <div className="flex flex-col justify-between gap-6">
                        <div
                          className={`card-title-${
                            index + 1
                          } w-11/12 font-space text-lg lg:text-xl xl:text-2xl font-semibold px-2 md:px-4 lg:px-6 py-2 rounded-md leading-8`}
                        >
                          {item.title}
                        </div>
                        <button
                          className={`card-button-${
                            index + 1
                          } group flex items-center gap-2 text-lg font-medium hover:cursor-pointer hover:scale-105 transition`}
                        >
                          <div
                            className={`card-icon-${
                              index + 1
                            } w-8 h-8 border rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-rotate-40`}
                          >
                            <ArrowRight size={24} />
                          </div>
                          Learn more
                        </button>
                      </div>

                      <div className="relative flex items-center gap-2 w-32 h-32 self-center">
                        <img src={item.icon} alt="Icon img" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {screenWidth > 768 && <CarouselPrevious />}
            {screenWidth > 768 && <CarouselNext />}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
