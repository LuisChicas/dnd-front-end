"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export type Path = {
  runes: number;
  add: () => void;
  substract: () => void;
};

interface TalentsContextProps {
  pathOne: Path;
  pathTwo: Path;
}

const TalentsContext = createContext<TalentsContextProps | undefined>(undefined);

interface TalentsProviderProps {
  children: ReactNode;
}

export const TalentsProvider = ({ children }: TalentsProviderProps) => {
  const [pathOne, setPathOne] = useState<number>(2);
  const [pathTwo, setPathTwo] = useState<number>(3);
  
  return (
    <TalentsContext.Provider value={{ 
      pathOne: {
        runes: pathOne,
        add: () => setPathOne(pathOne + 1),
        substract: () => setPathOne(pathOne - 1)
      },
      pathTwo: {
        runes: pathTwo,
        add: () => setPathTwo(pathTwo + 1),
        substract: () => setPathTwo(pathTwo - 1)
      },
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