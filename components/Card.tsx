import React from "react";
import Button from "./Button";
import Image from "next/image";

const Card = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Free offers for first time service!</h2>
          <p className="regular-16 text-gray-10">Available in your Town and Near Locations</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* we can include icon in buttons also  */}
            <Button type="button" title="Get started" variant="btn_white" full />
            <Button type="button" title="Contact us" variant="btn_dark_green_outline" full />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/offers.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default Card;
