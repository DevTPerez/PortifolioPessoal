"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function createCounter(
  startNum: number,
  endNum: number,
  timeMs: number,
  onUpdate: (value: number) => void
) {
  const steps = Math.abs(endNum - startNum);
  if (steps === 0) return () => {};

  const increment = endNum > startNum ? 1 : -1;
  const delay = timeMs / steps;

  let current = startNum;
  let timeoutId: ReturnType<typeof setTimeout>;

  function run() {
    current += increment;
    onUpdate(current);

    if (current !== endNum) {
      timeoutId = setTimeout(run, delay);
    }
  }

  timeoutId = setTimeout(run, delay);

  return () => clearTimeout(timeoutId);
}

export default function WorkWithMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [stores, setStores] = useState(0);
  const [devices, setDevices] = useState(0);
  const [operation, setOperation] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const stop1 = createCounter(0, 40, 2000, setStores);
    const stop2 = createCounter(0, 100, 2000, setDevices);
    const stop3 = createCounter(0, 100, 2000, setOperation);
    const stop4 = createCounter(0, 360, 2000, setProjects);

    return () => {
      stop1();
      stop2();
      stop3();
      stop4();
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0A] z-20 flex relative w-full max-w-[1440px] mx-auto"
    >
      <div className="w-full flex flex-col py-[80px] px-[30px]">
        <h2 className="text-[24px] md:text-[26px] lg:text-[30px] pb-[60px] text-white font-bold">
          Reasons to Work With Me
        </h2>

        <div className="flex flex-wrap gap-10 text-white my-10 text-3xl font-bold justify-between">
          <div className="mx-auto">
            <p className="text-[64px] font-light">+{stores}</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[200px] text-[#777777] font-light">
              Stores with live systems in production.
            </p>
          </div>

          <div className="mx-auto">
            <p className="text-[64px] font-light">+{devices}</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[200px] text-[#777777] font-light">
              Physical devices and integrated hardware.
            </p>
          </div>

          <div className="mx-auto">
            <p className="text-[64px] font-light">{operation}%</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[200px] text-[#777777] font-light">
              Reliable operation offline and in real time.
            </p>
          </div>

          <div className="mx-auto">
            <p className="text-[64px] font-light">{projects}º</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[200px] text-[#777777] font-light">
              Projects designed to scale from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}