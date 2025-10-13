import { useTerminal } from "@/context/TerminalContext";
import React, { useState, useEffect, RefObject } from "react";
import { useRouter } from "next/router";

const TerminalInput = ({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
}) => {
  const { setHistory } = useTerminal();
  const [input, setInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const router = useRouter();

  const commands: { [key: string]: string[] } = {
    help: [
      "Available commands:",
      "• help - Show this help message",
      "• about - Learn more about Dhafa",
      "• contact - Get contact information",
      "• skills - View technical skills",
      "• projects - List recent projects",
      "• resume - View resume",
      "• clear - Clear terminal history",
      "• whoami - Display current user info",
    ],
    contact: [
      "Contact Information:",
      "📧 Email: dhafa@example.com",
      "💼 LinkedIn: linkedin.com/in/dhafa",
      "🐙 GitHub: github.com/dhafa",
      "🌐 Portfolio: dhafa.dev",
    ],
    whoami: [
      "dhafa",
      "User: Developer & Creator",
      "Status: Currently building awesome things ✨",
    ],
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response: string[];

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "projects") {
      response = ["Navigating to projects page..."];
      setHistory((prev) => [...prev, { command: cmd, response }]);
      setTimeout(() => router.push("/projects"), 500);
      return;
    }

    if (command === "about") {
      response = ["Navigating to about page..."];
      setHistory((prev) => [...prev, { command: cmd, response }]);
      setTimeout(() => router.push("/about"), 500);
      return;
    }

    if (command === "skills") {
      response = ["Navigating to skills page..."];
      setHistory((prev) => [...prev, { command: cmd, response }]);
      setTimeout(() => router.push("/skills"), 500);
      return;
    }

    if (command === "resume") {
      response = ["Opening Resume..."];
      setHistory((prev) => [...prev, { command: cmd, response }]);
      setTimeout(() => setShowResumeModal(true), 500);
      return;
    }

    if (commands[command]) {
      response = commands[command];
    } else if (command === "") {
      return;
    } else {
      response = [
        `Command not found: ${command}`,
        "Type 'help' for available commands",
      ];
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center ">
        <span className="text-header">dhafa@portfolio</span>
        <span className="text-muted">:</span>
        <span className="text-link">~</span>
        <span className="text-muted">$ </span>
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-foreground w-full"
            spellCheck="false"
            style={{ caretColor: "transparent" }}
          />
          <span
            className={`absolute top-0 text-foreground pointer-events-none ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: `${input.length * 0.6}em` }}
          >
            █
          </span>
        </div>
      </form>

      {showResumeModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowResumeModal(false);
            }
          }}
        >
          <div className="w-full max-w-2xl h-[80vh] flex flex-col">
            <div className="flex-1">
              <iframe
                src="https://drive.google.com/file/d/1HJYXPounm-IkUoaLZ3G7GTbE2io3FYUT/preview"
                className="w-full h-full border-0"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalInput;
