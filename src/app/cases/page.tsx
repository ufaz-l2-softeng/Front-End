import React from "react";
import Case from "@/components/Case";

export default function Cases() {
  const cases = [
    {
      id: 1,
      image: "/case1.png",
      name: "Dragon",
    },
    {
      id: 2,
      image: "/case2.png",
      name: "Fakri",
    },
    {
      id: 3,
      image: "/case3.png",
      name: "Nazim",
    },
    {
      id: 4,
      image: "/case1.png",
      name: "Zalim",
    },
    {
      id: 5,
      image: "/case2.png",
      name: "Ismayil",
    },
  ];
  return (
    <div className="cases-container">
      {cases.map(({ id, image, name }) => (
        <Case key={id} id={id} image={image} name={name} />
      ))}
    </div>
  );
}
