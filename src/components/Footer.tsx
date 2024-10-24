import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex bg-gray-900 px-16 py-10 gap-12 border-t-blue-600 border-t-4">
      <div>
        <Image src={"/logo.png"} alt="logo" width={1000} height={1000} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-12">
          <p className="text-white font-semibold text-lg">Terms of Use</p>
          <p className="text-white font-semibold text-lg">Privacy Policy</p>
          <p className="text-white font-semibold text-lg">Contacts</p>
          <p className="text-white font-semibold text-lg">FAQ</p>
        </div>
        <p className="text-white">
          The copyright holder of the inventory objects is Valve Corporation.
          All included here mentioned brand names are registered and property of
          the respective companies. The right to participate in a promotional
          event for the drawing of a unique digital product, presented in the
          form of a limited personal non-transferable revocable exclusive
          license, without the right to sublicense, for the use of digital
          objects, is guaranteed to every user who has purchased goods in the
          amount of $1 or more. Terms of the promotion: from December 1, 2020 to
          October 29, 2022. The transparency of the event is ensured by the
          presence of a Live Feed mechanism on the site. The results of the
          event are summed up instantly, by randomly selecting the winners. The
          number of allowed participation attempts is unlimited and is directly
          proportional to the purchase amount.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
