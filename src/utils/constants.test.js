// constants.test.ts
import { colors, SortBy } from "./constants";

describe("constants", () => {
  it("should have the correct colors", () => {
    expect(colors).toEqual(["#1d4ed8", "#7e22ce", "#b91c1c", "#a16207"]);
  });

  it("should have the correct SortBy options", () => {
    expect(SortBy).toEqual([
      { key: 1, value: "Rarity: Increasing" },
      { key: 2, value: "Rarity: Decreasing" },
    ]);
  });
});
