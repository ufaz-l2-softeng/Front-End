import InventoryFilter from "@/components/InventoryFilter";
import Item from "@/components/Item";
import React from "react";

const page = () => {
  const inventory = [
    {
      id: 1,
      name: "AK-47",
      rarity: 3,
      image: "/logo.png",
    },
    {
      id: 2,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 3,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 4,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 5,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 6,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 7,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 8,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 9,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
    {
      id: 10,
      name: "SCAR-20",
      rarity: 2,
      image: "/logo.png",
    },
  ];
  return (
    <div className="px-16">
      <h2 className="text-3xl font-bold mb-8">Inventory</h2>
      <InventoryFilter />
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {inventory.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default page;
