import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    gsap.to("#logo", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="w-full flex items-center justify-between fixed px-28 py-10 z-10">
      <img
      id="logo"
        src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
        alt=""
      />
      <button className="bg-black text-white px-10 py-2 border-white border-solid border-[5px] rounded-full hover:scale-110 transition-colors duration-300">
        Hire me
      </button>
    </div>
  );
};

export default Header;
