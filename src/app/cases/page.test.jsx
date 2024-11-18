import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cases from "./page";

describe("cases page component", () => {
  it("renders cases list", () => {
    render(<Cases />);
    const caseCells = screen.getAllByText(/Dragon|Fakri|Nazim|Zalim|Ismayil/);
    expect(caseCells).toHaveLength(5);
  });

  it("renders Case component for each case", () => {
    render(<Cases />);
    const caseCells = screen.getAllByText(/Dragon|Fakri|Nazim|Zalim|Ismayil/);
    expect(caseCells).toHaveLength(5);
    expect(caseCells[0]).toHaveTextContent("Dragon");
  });
});
