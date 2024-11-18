import Link from "next/link";
import React from "react";

const Case = ({
  id,
  image,
  name,
}: {
  id: number;
  image: string;
  name: string;
}) => {
  return (
    <div className="case-cell">
      <Link href={`/cases/${id}`} className="price-button"></Link>
      <img src={image} alt={String(id)} className="case-image" />
      <h3>{name}</h3>
      <div className="underlinender"></div>
    </div>
  );
};

export default Case;
