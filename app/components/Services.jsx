import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const [value, setValue] = useState(""); // starts closed

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="flex flex-col gap-4 items-center backgroundPrimary w-full px-[12%] xl:px-[10%] py-10 scroll-mt-20"
    >
      {/* Title */}
      <div className="flex flex-col mb-6 text-center">
        <h4 className="mb-2 text-lg">What I offer</h4>
        <h2 className="text-5xl">My Services</h2>
      </div>

      {/* Single Accordion wrapper */}
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
        className="w-full max-w-3xl"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-borderColor backgroundPrimary rounded-lg px-8 py-4 cursor-pointer"
          >
            <AccordionTrigger className="flex items-center gap-4">
              <Image src={icon} alt={title} className="w-10 h-10" />
              {title}
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default Services;
