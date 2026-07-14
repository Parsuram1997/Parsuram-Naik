"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ConnectContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openConnect: () => void;
  closeConnect: () => void;
}

const ConnectContext = createContext<ConnectContextType | undefined>(undefined);

export function ConnectProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConnect = () => setIsOpen(true);
  const closeConnect = () => setIsOpen(false);

  return (
    <ConnectContext.Provider value={{ isOpen, setIsOpen, openConnect, closeConnect }}>
      {children}
    </ConnectContext.Provider>
  );
}

export function useConnect() {
  const context = useContext(ConnectContext);
  if (context === undefined) {
    throw new Error("useConnect must be used within a ConnectProvider");
  }
  return context;
}
