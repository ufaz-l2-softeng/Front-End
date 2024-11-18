import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header.tsx";

jest.mock("next/link", () => {
  const { cloneElement, isValidElement } = jest.requireActual("react");
  return ({ children, ...rest }) => {
    if (isValidElement(children)) {
      return cloneElement(children, { ...rest });
    }
    return children;
  };
});

describe("Header component", () => {
  describe("Header component", () => {
    it("renders correctly", () => {
      render(<Header />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
    });
  });
});
