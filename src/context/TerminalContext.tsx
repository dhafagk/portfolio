import React, { createContext, useContext, useState, ReactNode } from "react";

interface CommandHistory {
  command: string;
  response: string[];
}

interface TerminalContextType {
  history: CommandHistory[];
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) throw new Error("error");
  return context;
};

interface TerminalProviderProps {
  children: ReactNode;
}

export const TerminalProvider = ({ children }: TerminalProviderProps) => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      response: [
        "Welcome to Dhafa's Portfolio Terminal!",
        "",
        "Tips:",
        "• Type 'help' to see available commands",
        "• Try 'about', 'skills', or 'resume' to navigate",
        "• Drag the border above to resize this terminal",
      ],
    },
  ]);

  const value = {
    history,
    setHistory,
  };

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};
