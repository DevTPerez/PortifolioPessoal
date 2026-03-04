/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, JSX } from "react";
import { ChevronRight } from "lucide-react"

const imgs: {
  bgImage: string,
  alt: string,
  title: JSX.Element;
  subtitle: JSX.Element,
  description: JSX.Element
}[] = [
  {
    bgImage: "/digitalSignage.png",
    alt: "Digital signage with centralized control",
    title: <h2>Digital Signage</h2>,
    subtitle: <h2>SmartMedia</h2>,
    description: (
      <p>
        Used in real retail operations
        <br /> → 30+ active stores
        <br /> → Real-time updates
        <br /> → Offline operation guaranteed
        <br /> → Centralized remote control
      </p>
    )
  },
  {
    bgImage: "/gestaoDeAtendimento.png",
    alt: "Intelligent service management system",
    title: <h2>Service Management</h2>,
    subtitle: <h2>FlowDesk</h2>,
    description: (
      <p>
        Smart customer flow
        <br /> → Queue & priority management
        <br /> → Real-time alerts
        <br /> → Shorter wait times
        <br /> → Central monitoring
      </p>
    )
  },
  {
    bgImage: "/pontoEletronico.png",
    alt: "Digital time tracking system",
    title: <h2>Time Tracking</h2>,
    subtitle: <h2>TimeTrack</h2>,
    description: (
      <p>
        Modern control of work hours
        <br /> → Secure digital records
        <br /> → Shift and schedule management
        <br /> → Automatic reports
        <br /> → Integration with routines
      </p>
    )
  },
  {
    bgImage: "/gamificacaoColetaLead.png",
    alt: "Gamification for lead generation",
    title: <h2>Gamification & Leads</h2>,
    subtitle: <h2>Lure&Play</h2>,
    description: (
      <p>
        Interactive experiences for client engagement
        <br /> → Custom layouts
        <br /> → Smart lead collection
        <br /> → Integration with campaigns
        <br /> → Real-time metrics
      </p>
    )
  }
];

export default function MyProducts() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [hiddenItem, setHiddenItem] = useState<number | null>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [expandingImage, setExpandingImage] = useState<number | null>(null);

  const loopItems = [...imgs, ...imgs];
  const itemW = 166;

  const nextSlide = () => {
    const nextCarouselIndex = index + 1;
    const next = (activeIndex + 1) % imgs.length;

    setHiddenItem(nextCarouselIndex);
    setActiveIndex(next);
    setIndex(nextCarouselIndex);
    setExpandingImage(next);

    setTimeout(() => {
      setHiddenItem(null);
    }, 600);
  };
  
  useEffect(() => {
    if (expandingImage === null) return;

    const timer = setTimeout(() => {
      setBgIndex(expandingImage); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [expandingImage]);

  useEffect(() => {
    if (index >= imgs.length) {
      setTimeout(() => {
        setIsResetting(true);
        setIndex(prev => prev - imgs.length);
      }, 600);
    }
  }, [index]);

  useEffect(() => {
    if (isResetting) {
      requestAnimationFrame(() => setIsResetting(false));
    }
  }, [isResetting]);

  return (
    <section  
      className=" bg-[#0A0A0A] relative min-h-[600px] py-[80px] z-10  overflow-hidden"
      id="portfolio"
    >      
      <div className="max-w-[1440px] mx-auto bg-[#0A0A0A] px-[10px] lg:px-[30px]">
        <h2 className="max-w-[1440px] ml-[30px] md:-ml-0 text-white mb-[80px] text-[24px] md:text-[26px] lg:text-[30px] font-bold bg-[#0A0A0A]" >
          Some Products
        </h2>
        
        <motion.div 
          layout
          className="relative lg:h-[600px] h-[700px] rounded-[25px] overflow-hidden bg-[#0A0A0A] text-white"
        >
          <div className="absolute inset-0 w-full h-full z-10">
            <img
              src={imgs[bgIndex].bgImage}
              className="absolute inset-0 w-full h-full object-cover min-h-full"
            />
          </div>
        <AnimatePresence>
          {expandingImage !== null && (
            <motion.img
              key={expandingImage}
              src={imgs[expandingImage].bgImage}
              className="absolute z-30 object-cover"
              initial={{
                width: 150,
                height: 100,
                bottom: 90,
                left: "50%",
                borderRadius: "10px"
              }}
              animate={{
                width: "100%",
                height: "100%",
                bottom: 0,
                left: 0,
                x: 0,
                borderRadius: 0
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              onAnimationComplete={() => {
                setBgIndex(expandingImage); 
                setExpandingImage(null);    
              }}
            />
          )}
        </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute flex flex-col  top-[50px] h-[350px] md:h-[400px] lg:h-[460px] left-[10px] md:left-[50px] z-20 w-[300px] md:w-[400px] py-[20px] px-[10px] rounded-[20px] bg-black/60 backdrop-blur-[10px] shadow-[3px_6px_11px_8px_#000000bd]"
              initial={{ y:40, opacity:0 }}
              animate={{ y:0, opacity:1 }}
              exit={{ y:-40, opacity:0 }}
              transition={{ duration:0.5 }}
            >
              <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light uppercase max-w-[370px]">
                {imgs[activeIndex].title}
              </div>

              {imgs[activeIndex].subtitle && (
                <div className="text-[#777777] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-white my-[10px] max-w-[370px]">
                  {imgs[activeIndex].subtitle}
                </div>
              )}

              <div className="text-[#777777] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[370px] leading-tight">
                {imgs[activeIndex].description}
              </div>

              <a
                  href="#contato"
                  className="
                  px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4
                  bg-white text-black text-center
                  rounded-full border-[2px] border-black
                  font-semibold
                  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]
                  hover:bg-gray-300
                  transition-colors duration-300 my-[20px]
                  "
              >
                 Request a Demo
              </a>

              <p className="text-[#777777] text-[14px] md:text-[16px] max-w-[350px] leading-4">
                System in real production. Visual data anonymized for client protection.
              </p>
            </motion.div>
          </AnimatePresence>

          <div>
            <div className="absolute bottom-[90px] left-1/2 overflow-hidden max-w-[482px] rounded-[15px]  z-40">
              <motion.div
                className="flex gap-4"
                animate={{ x: -index * itemW }}
                transition={
                  isResetting
                    ? { duration: 0 }
                    : { duration: 0.6, ease: "easeInOut" }
                }
              >
                {loopItems.map((item, i) => {
                  const isHidden = i === hiddenItem;
                  return (
                    <div
                      key={i}
                      className="w-[150px] flex-shrink-0 translate-x-[-166px]  rounded-[10px] overflow-hidden"
                    >
                      <img
                        src={item.bgImage}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        style={{ opacity: isHidden ? 0 : 1 }}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
            <div className=" p-2 absolute bottom-[110px] md:bottom-8 left-1/5 md:left-1/2 w-[150px] md:items-center rounded-lg  z-40 cursor-pointer">
              <ChevronRight
                size={40}
                onClick={nextSlide}
                className="bg-black/60 text-[white]/60 p-1 lg:mx-auto rounded-full"
              >
              </ChevronRight>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}