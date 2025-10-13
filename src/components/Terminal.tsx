import React, { useState, useRef, useEffect } from "react";
import TerminalInput from "./TerminalInput";
import { useTerminal } from "@/context/TerminalContext";

const Terminal = () => {
  const { history } = useTerminal();
  const [terminalHeight, setTerminalHeight] = useState(180);
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [initialHeight, setInitialHeight] = useState(180);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setInitialMouseY(e.clientY);
    setInitialHeight(terminalHeight);
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!terminalRef.current) return;

      const deltaY = initialMouseY - e.clientY;
      const newHeight = initialHeight + deltaY;

      const minHeight = 100;
      const maxHeight = window.innerHeight * 0.6;
      const clampedHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

      setTerminalHeight(clampedHeight);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
      document.body.style.cursor = "ns-resize";
    }

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.body.style.cursor = "";
    };
  }, [isDragging]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      <div
        className={`md:h-1 h-5 border-t dark:border-white border-black cursor-ns-resize hover:bg-white/20 transition-colors touch-none relative ${
          isDragging ? "bg-white/30" : ""
        }`}
        onPointerDown={handlePointerDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-white/40 rounded-full md:hidden" />
      </div>

      <div
        ref={terminalRef}
        className="flex flex-col pt-0 sm:pt-2 pb-4 flex-shrink-0 overflow-y-auto"
        style={{ height: `${terminalHeight}px` }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="font-mono text-sm space-y-2">
          {history.map((entry, index) => (
            <div key={index}>
              <div className="text-foreground">
                <span className="text-header">dhafa@portfolio</span>
                <span className="text-muted">:</span>
                <span className="text-link">~</span>
                <span className="text-muted">$ </span>
                {entry.command}
              </div>
              {entry.response.map((line, lineIndex) => (
                <div key={lineIndex} className="text-foreground pl-4">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-2 flex-shrink-0">
          <TerminalInput inputRef={inputRef} />
        </div>
      </div>
    </>
  );
};

export default Terminal;
