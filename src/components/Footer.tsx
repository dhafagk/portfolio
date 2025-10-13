import React from "react";
import Clock from "./Clock";
import Dropdown from "./Dropdown";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
  ];

  const getSelectedLabel = () => {
    return themeOptions.find((opt) => opt.value === theme);
  };

  return (
    <div className="pt-2 sm:flex hidden flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
      <span>Created By Dhafa Gustiadi Kurniawan</span>
      <span>|</span>
      <Clock />
      <span>|</span>
      <Dropdown
        onSelect={(val) => setTheme(val.value as "light" | "dark")}
        options={themeOptions}
        selectedValue={getSelectedLabel()?.value}
        placeholder="Color Theme"
        menuDirection="up"
        buttonTextColor="text-foreground"
      />
    </div>
  );
};

export default Footer;
