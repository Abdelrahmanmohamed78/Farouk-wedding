import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

function ViewMapBtn() {
  return (
    <Link
      href={`https://maps.app.goo.gl/r1B7X7j4nKSHCHLNA`}
      target="blank"
      className="py-2 px-4 w-fit mx-auto mt-10 rounded-[50px] text-[13px] font-semibold border-[#ded5c8] border flex items-center gap-1 cursor-pointer duration-[0.4s] hover:bg-[#fbf6ee]"
    >
      <IoLocationOutline />
      View on map
    </Link>
  );
}

export default ViewMapBtn;
