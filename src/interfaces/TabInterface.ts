import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
}