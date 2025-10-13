import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "../../public/icons/dropdown.svg";

interface DropdownOption {
  value: string;
  label: string;
}

type MenuDirection = "down" | "up";

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onSelect: (option: DropdownOption) => void;
  selectedValue?: string;
  menuDirection?: MenuDirection;
  buttonTextColor?: string;
}

const Dropdown = ({
  options,
  placeholder,
  onSelect,
  selectedValue,
  menuDirection = "down",
  buttonTextColor = "text-white",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    selectedValue
      ? options.find((opt) => opt.value === selectedValue) || null
      : null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        className={`${
          isOpen ? "text-header" : buttonTextColor
        } text-left flex items-center gap-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {placeholder ||
            (selectedOption ? selectedOption.label : "Select an option")}
        </span>
        <DropdownIcon
          className={`transition-all duration-300 ${
            menuDirection === "up" && "rotate-180"
          } ${
            isOpen ? (menuDirection === "up" ? "rotate-360" : "rotate-180") : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 w-full min-w-44 bg-menu-background border dark:border-white border-black max-h-60 overflow-auto ${
            menuDirection === "up" ? "bottom-full mb-1" : "top-full mt-1"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`w-full px-4 py-2 text-left dark:hover:bg-black hover:bg-white transition-colors ${
                selectedOption?.value === option.value
                  ? "dark:bg-black bg-white text-header"
                  : "dark:text-white text-black"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
