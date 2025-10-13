import React from "react";

interface TextDividerProps {
  text: string;
  className?: string;
}

const TextDivider = ({ text, className }: TextDividerProps) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-1 h-px border-t border-dashed border-header mr-1"></div>
      <span className="text-header font-mono whitespace-nowrap px-2">
        {text}
      </span>
      <div className="flex-[30] h-px border-t border-dashed border-header ml-1"></div>
    </div>
  );
};

export default TextDivider;
