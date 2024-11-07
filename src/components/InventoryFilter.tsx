"use client";
import { SortBy } from "@/utils/constants";
import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";

const InventoryFilter = () => {
  const [sort, setSort] = useState("Rarity: Increasing");
  return (
    <Select
      items={SortBy}
      placeholder={"Sort By"}
      className="max-w-xs white"
      aria-label="Sort By"
      variant="bordered"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      {(order) => <SelectItem key={order.key}>{order.value}</SelectItem>}
    </Select>
  );
};

export default InventoryFilter;
