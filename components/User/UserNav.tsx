import ArrowDownCircle from "@/components/Svg/ArrowDownCircle";
import ArrowUpCircle from "@/components/Svg/ArrowUpCircle";
import Brush from "@/components/Svg/Brush";
import Cart from "@/components/Svg/Cart";
import File from "@/components/Svg/File";
import { useState } from "react";
import UserNftGrid from "../Grid/UserNftGrid";

const UserNav: React.FC = () => {
  const [active, setActive] = useState({
    created: true,
    collected: false,
    collections: false,
    offersMade: false,
    offersReceived: false,
  });

  const navigate = (option: number) => {
    switch (option) {
      case 0:
        setActive({
          created: true,
          collected: false,
          collections: false,
          offersMade: false,
          offersReceived: false,
        });
        break;
      case 1:
        setActive({
          created: false,
          collected: true,
          collections: false,
          offersMade: false,
          offersReceived: false,
        });
        break;
      case 2:
        setActive({
          created: false,
          collected: false,
          collections: true,
          offersMade: false,
          offersReceived: false,
        });
        break;
      case 3:
        setActive({
          created: false,
          collected: false,
          collections: false,
          offersMade: false,
          offersReceived: true,
        });
        break;
      case 4:
        setActive({
          created: false,
          collected: false,
          collections: false,
          offersMade: true,
          offersReceived: false,
        });
        break;
      default:
        setActive({
          created: true,
          collected: false,
          collections: false,
          offersMade: false,
          offersReceived: false,
        });
    }
  };

  return (
    <>
    <div className="border relative overflow-auto  space-x-16 justify-center font-extralight text-xl font- flex items-center border-gray-200 dark:bg-[#041824] dark:border-[#092940] p-4 rounded-md w-full">
      <div
        onClick={() => {
          navigate(0);
        }}
        className="flex cursor-pointer transition hover:bg-white/10 py-1 px-5 rounded-lg flex-row"
      >
        <Brush />
        Created 4
        <hr
          className={`
          ${
            active.created &&
            "bg-[#feb019] transition bottom-0 absolute border-[#feb019] w-36 h-1"
          }`}
        />
      </div>
      <div
        onClick={() => {
          navigate(1);
        }}
        className="flex cursor-pointer rounded-lg transition hover:bg-white/10 py-1 px-5 flex-row"
      >
        <Cart />
        Collected
        <hr
          className={`
          ${
            active.collected &&
            "bg-[#feb019] transition bottom-0 absolute border-[#feb019] w-36 h-1"
          }`}
        />
      </div>
      <div
        onClick={() => {
          navigate(2);
        }}
        className="flex cursor-pointer rounded-lg transition hover:bg-white/10 py-1 px-5 flex-row"
      >
        <File />
        Collections 4
        <hr
          className={`
          ${
            active.collections &&
            "bg-[#feb019] transition bottom-0 absolute border-[#feb019] w-36 h-1"
          }`}
        />
      </div>
      <div
        onClick={() => {
          navigate(3);
        }}
        className="flex cursor-pointer rounded-lg transition hover:bg-white/10 py-1 px-5 flex-row"
      >
        <ArrowDownCircle />
        Offers Received
        <hr
          className={`
          ${
            active.offersReceived &&
            "bg-[#feb019] transition bottom-0 absolute border-[#feb019] w-36 h-1"
          }`}
        />
      </div>
      <div
        onClick={() => {
          navigate(4);
        }}
        className="flex cursor-pointer hover:bg-white/10 py-1 px-5 rounded-lg transition flex-row"
      >
        <ArrowUpCircle />
        Offers Made
        <hr
          className={`
            ${
              active.offersMade &&
              "bg-[#feb019] transition bottom-0 absolute border-[#feb019] w-36 h-1"
            }`}
        />
      </div>
    </div>
    <UserNftGrid />
    </>
  );
};

export default UserNav;