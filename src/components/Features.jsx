import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  const [clickedCardIndex, setClickedCardIndex] = useState({
    cardClickedState: false,
    index: null,
  });

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
      details:
        "Complete tracking and management of all your financial transactions from data entry to final reports, ensuring accuracy and compliance every step of the way.",
    },
    {
      title: "Bank Reconciliations",
      icon: cardImg2.src,
      details:
        "We match your bank statements with your financial records to ensure everything adds up accurately helping you catch errors, avoid fraud, and maintain clean books.",
    },
    {
      title: "Payroll Services",
      icon: cardImg3.src,
      details:
        "Timely and accurate payroll processing, including salary calculations, tax deductions, and payslip generation ensuring your team is paid correctly and on time.",
    },
    {
      title: "Financial reporting",
      icon: cardImg4.src,
      details:
        "Clear and detailed reports that give you insights into your business’s performance helping you make informed financial decisions with confidence.",
    },
    {
      title: "Debtor Management",
      icon: cardImg5.src,
      details:
        "Efficient tracking and follow-up of outstanding payments to improve cash flow and reduce overdue invoices keeping your business financially healthy.",
    },
    {
      title: "System Setup & Support",
      icon: cardImg6.src,
      details:
        "We help you choose and set up the right accounting software, and provide ongoing support to ensure smooth, efficient financial management from day one.",
    },
    {
      title: "BAS Lodgement",
      icon: cardImg7.src,
      details:
        "Accurate preparation and timely submission of your Business Activity Statements (BAS) to ensure GST and tax compliance with ATO regulations.",
    },
  ];

  return (
    <section id="whatwedo" className="bg-gradient-to-b from-[#FFFAF2] to-[#FFDEAA] scroll-mt-10">
      <div className="max-w-[1800px] mx-auto px-2 md:px-6 py-4 md:py-16">
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
          className="flex space-x-6 md:px-4"
        >
          <Carousel plugins={[plugin.current]} className="w-full max-w-[1600px] mx-auto">
            <CarouselContent className="md:-ml-1 flex">
              {cards.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(`${index === 0 ? "px-0" : "md:pl-4"} md:basis-1/2 xl:basis-1/3`)}
                >
                  <div className="p-1">
                    <div
                      className={`flex ${
                        !clickedCardIndex.cardClickedState ||
                        (clickedCardIndex.cardClickedState && clickedCardIndex.index !== index)
                          ? `card-${index + 1} justify-between py-12`
                          : clickedCardIndex.index !== index
                          ? ""
                          : index % 2 === 0
                          ? "bg-white flex-col py-6"
                          : "bg-[#191A23] flex-col py-6"
                      } min-w-[320px] h-[250px] rounded-3xl border border-[#000c3f] shadow-[0_5px_0_0_rgb(0,12,63)] p-4`}
                    >
                      <div
                        className={`flex ${
                          !clickedCardIndex.cardClickedState ||
                          (clickedCardIndex.cardClickedState && clickedCardIndex.index !== index)
                            ? "flex-col"
                            : "flex-row"
                        } justify-between gap-6`}
                      >
                        <div
                          className={`${
                            !clickedCardIndex.cardClickedState ||
                            (clickedCardIndex.cardClickedState && clickedCardIndex.index !== index)
                              ? `card-title-${index + 1} w-11/12`
                              : index % 2 === 0
                              ? "bg-black text-white"
                              : "bg-[#ED8A01] text-white"
                          } font-space text-lg lg:text-xl xl:text-2xl font-semibold px-2 md:px-4 lg:px-6 py-2 rounded-md leading-8`}
                        >
                          {item.title}
                        </div>
                        {(!clickedCardIndex.cardClickedState ||
                          (clickedCardIndex.cardClickedState && clickedCardIndex.index !== index)) && (
                          <button
                            className={`card-button-${
                              index + 1
                            } group flex items-center gap-2 text-lg font-medium hover:cursor-pointer hover:scale-105 transition`}
                            onClick={() => {
                              setClickedCardIndex({
                                cardClickedState: true,
                                index: index,
                              });
                            }}
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
                        )}
                        {clickedCardIndex.cardClickedState && clickedCardIndex.index === index && (
                          <button
                            className={`flex items-center gap-2 text-lg font-medium hover:cursor-pointer hover:scale-105 transition`}
                            onClick={() => {
                              setClickedCardIndex({
                                cardClickedState: false,
                                index: null,
                              });
                            }}
                          >
                            <div
                              className={`w-8 h-8 border ${
                                index % 2 === 0 ? "border-black" : "bg-black text-[#ED8A01] border-[#ED8A01]"
                              } rounded-full flex items-center justify-center transition-transform duration-300`}
                            >
                              <ArrowLeft size={24} />
                            </div>
                          </button>
                        )}
                      </div>
                      {clickedCardIndex.cardClickedState && clickedCardIndex.index === index && (
                        <p className={`${index % 2 === 0 ? "text-black" : "text-white"} mt-4`}>{item.details}</p>
                      )}

                      {(!clickedCardIndex.cardClickedState ||
                        (clickedCardIndex.cardClickedState && clickedCardIndex.index !== index)) && (
                        <div className="relative flex items-center gap-2 w-32 h-32 self-center">
                          <img src={item.icon} alt="Icon img" />
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {screenWidth > 768 && <CarouselPrevious className="hover:cursor-pointer" />}
            {screenWidth > 768 && <CarouselNext className="hover:cursor-pointer" />}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
