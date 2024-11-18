import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InventoryFilter from "@/components/InventoryFilter";

// Mock the SortBy constant
jest.mock("@/utils/constants", () => ({
  SortBy: [
    { key: "increasing", value: "Rarity: Increasing" },
    { key: "decreasing", value: "Rarity: Decreasing" },
  ],
}));

describe("InventoryFilter component", () => {
  it("renders select input with options", () => {
    render(<InventoryFilter />);

    const selectInput = screen.getByLabelText("Sort By");
    expect(selectInput).toBeInTheDocument();

    // Options should be present in the DOM
    fireEvent.mouseDown(selectInput); // Open dropdown to ensure options render
    let options = screen.getAllByText("Rarity: Increasing");
    const option = options.find((element) => element.tagName === "OPTION");
    expect(option).toBeInTheDocument();

    options = screen.getAllByText("Rarity: Decreasing");
    const option2 = options.find((element) => element.tagName === "OPTION");
    expect(option2).toBeInTheDocument();
  });

  it("updates state when a new option is selected", () => {
    render(<InventoryFilter />);

    const selectInput = screen.getByLabelText("Sort By");

    // Open dropdown
    fireEvent.mouseDown(selectInput);

    // Select "Rarity: Decreasing"
    let options = screen.getAllByText("Rarity: Decreasing");
    const option = options.find((element) => element.tagName === "OPTION");
    fireEvent.click(option);

    // Verify that the select input updates its value
    expect(selectInput).toHaveValue("Rarity: Increasing");
  });
});
