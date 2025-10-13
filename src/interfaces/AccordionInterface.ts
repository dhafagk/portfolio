import { ReactNode } from "react";

export interface AccordionItem {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}
