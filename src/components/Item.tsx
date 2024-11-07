import IItem from "@/interfaces/IItem";
import { colors } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Item = ({ image, name, rarity }: IItem) => {
  const color = colors[rarity];
  return (
    <div
      className="flex flex-col justify-between w-52 h-64 rounded-2xl p-6"
      style={{
        background: `linear-gradient(to bottom right, #1e3a8a, ${color})`,
      }}
    >
      <h3 className="text-white">{name}</h3>
      <Image src={image} alt={name} width={1000} height={1000} />
      <div
        className={`w-4 h-4 rounded-full`}
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default Item;
