import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1Bottom = () => {
  useGSAP(()=>{
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease:"linear",
    })
  })
  return (
    <div className="absolute bottom-0 px-24 py-10  w-[98%] flex items-end justify-between">
      <div className="">
        <h1 className="font-[semibold] text-white font-bold text-3xl">
          BRAND DESIGN | WEBSITE DESIGN
        </h1>
        <h2 className="font-[semibold] text-zinc-600 text-3xl">
          BESPOKE FREELANCE
        </h2>
      </div>
      <div id="banner">
        <img
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
          className="mb-5"
        />
        <img
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
