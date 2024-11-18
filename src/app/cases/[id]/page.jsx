"use client";
import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { Button } from "@nextui-org/react";
import { colors } from "@/utils/constants";

const items = [
  {
    rarity: 1,
    skin: "M4A1-S | Cyrex",
    img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png",
  },
  {
    rarity: 2,
    skin: "M4A1-S | Chantico's Fire",
    img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygED6_UZrMTzwJYSdJlU8N1zY81TrxO_v0MW9uJnBm3Rk7nEk5XfUmEeyhQYMMLIUhCYx0A",
  },
  {
    rarity: 3,
    skin: "M4A4 | Asiimov",
    img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4_asimov_light_large.af03179f3d43ff55b0c3d114c537eac77abdb6cf.png",
  },
];

function RaffleRoller() {
  const [rolledSkin, setRolledSkin] = useState("rolling");
  const [raffleItems, setRaffleItems] = useState([]);
  const [marginLeft, setMarginLeft] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const generate = () => {
    setIsDisabled(true);
    setMarginLeft(0);

    // Generate items for raffle
    const itemsList = [];
    for (let i = 0; i < 101; i++) {
      if (i == 80) {
        itemsList.push({ ...items[1] });
        continue;
      }
      const rand = Math.floor(Math.random() * 1000);
      let item = { ...items[0] };
      if (rand < 50) item = { ...items[2] };
      else if (rand > 500) item = { ...items[1] };
      itemsList.push(item);
    }
    setRaffleItems(itemsList);

    setTimeout(() => {
      goRoll(items[1].rarity, items[1].skin, items[1].img);
    }, 500);
  };

  const goRoll = (rarity, skin, skinimg) => {
    setMarginLeft(-6770);
    let timeout = inventory.length > 0 ? 4500 : 8500;
    setTimeout(() => {
      setRolledSkin(skin);
      setInventory((prevInventory) => [
        ...prevInventory,
        { rarity, skin, img: skinimg },
      ]);
      setIsDisabled(false);
    }, timeout);
  };

  const color =
    inventory.length > 0
      ? colors[inventory[inventory.length - 1].rarity]
      : "green";

  return (
    <div>
      <div className={styles.raffleRoller}>
        <div className={styles.raffleRollerHolder}>
          <div
            className={styles.raffleRollerContainer}
            style={{
              marginLeft: `${marginLeft}px`,
              transition: "all 8s cubic-bezier(.08,.6,0,1)",
            }}
          >
            {raffleItems.map((item, index) => (
              <div
                key={index}
                className={styles.item}
                style={{
                  backgroundImage: `url(${item.img})`,
                  borderBottom: `4px solid ${colors[item.rarity]}`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <center>
        <span style={{ fontSize: "25px" }}>
          You won <span style={{ color: color }}>{rolledSkin}</span>
        </span>
        <br />
        <br />
        <Button
          disabled={isDisabled}
          variant="bordered"
          onClick={() => generate()}
        >
          Spin
        </Button>
      </center>
      <br />
      <div className={styles.inventory}>
        {inventory.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{
              backgroundImage: `url(${item.img})`,
              borderBottom: `4px solid ${colors[item.rarity]}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RaffleRoller;
