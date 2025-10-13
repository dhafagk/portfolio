import React, { useState } from "react";
import { AccordionProps } from "@/interfaces/AccordionInterface";
import DropdownIcon from "../../public/icons/dropdown.svg";
import TextDivider from "./TextDivider";

const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div key={index} className="">
            <div
              onClick={() => toggleItem(index)}
              className="w-full text-left p-3 flex items-center gap-4 cursor-pointer"
            >
              <DropdownIcon
                className={`w-4 h-4 transition duration-500 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              <TextDivider text={item.title} className="flex-1" />
            </div>
            {isOpen && (
              <div className="p-3 pt-0">
                <div className="text-foreground font-mono text-sm leading-relaxed">
                  {item.children}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
