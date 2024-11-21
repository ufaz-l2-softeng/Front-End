"use client";
import React, { useState, createContext } from "react";

export const sessionContext = createContext({});

const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const arr = useState({});
  return (
    <sessionContext.Provider value={arr}>{children}</sessionContext.Provider>
  );
};

export default CategoryContextProvider;
