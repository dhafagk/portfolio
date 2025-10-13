import React from "react";
import { TerminalProvider } from "./TerminalContext";
import { ThemeProvider } from "./ThemeContext";

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext = ({ children }: AppContextProps) => {
  return (
    <ThemeProvider>
      <TerminalProvider>{children}</TerminalProvider>
    </ThemeProvider>
  );
};

export default AppContext;
