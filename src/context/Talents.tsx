"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export type Path = {
  runes: number;
  add: () => void;
  substract: () => void;
};

interface TalentsContextProps {
  getRunes: (path?: number) => number;
  addRune: (path: number) => void;
  removeRune: (path: number) => void;
  getRuneLimitAnimation: boolean;
  setRuneLimitAnimation: (value: boolean) => void;
}

const TalentsContext = createContext<TalentsContextProps | undefined>(undefined);

interface TalentsProviderProps {
  children: ReactNode;
}

export const TalentsProvider = ({ children }: TalentsProviderProps) => {
  const [pathOne, setPathOne] = useState<number>(0);
  const [pathTwo, setPathTwo] = useState<number>(0);
  const [runeLimitAnimation, setRuneLimitAnimation] = useState<boolean>(false);
  
  return (
    <TalentsContext.Provider value={{ 
      getRunes: (path) => {
        if (!!path) {
          return path === 1 ? pathOne : pathTwo;
        } else {
          return pathOne + pathTwo;
        }
      },
      addRune: (path) => path === 1 ? setPathOne(pathOne + 1) : setPathTwo(pathTwo + 1),
      removeRune: (path) => path === 1 ? setPathOne(pathOne - 1) : setPathTwo(pathTwo - 1),
      getRuneLimitAnimation: runeLimitAnimation,
      setRuneLimitAnimation: (value) => setRuneLimitAnimation(value)
    }}>
      {children}
    </TalentsContext.Provider>
  );
};

export const useTalentsContext = () => {
  const context = useContext(TalentsContext);

  if (!context)
      throw new Error("Missing TalentsProvider.");

  return context;
};