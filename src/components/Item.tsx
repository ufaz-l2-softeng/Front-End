import IItem from "@/interfaces/IItem";
import { colors } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Item = ({ image, name, rarity }: IItem) => {
  const color = colors[rarity];
  return (
    <div
      className={`flex flex-col justify-between w-52 h-64 bg-blue-800 rounded-2xl bg-gradient-to-br from-blue-800 to-${color}-700 p-6`}
    >
      <h3 className="text-white">{name}</h3>
      <Image src={image} alt={name} width={1000} height={1000} />
      <div className={`w-4 h-4 rounded-full bg-yellow-600`}></div>
    </div>
  );
};

export default Item;
