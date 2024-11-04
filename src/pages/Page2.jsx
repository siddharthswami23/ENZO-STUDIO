import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(()=>{
        gsap.from(".rotateText", {
            transform:"rotateX(-80deg)",
            duration:3,
            scale:0.01,
            opacity:0,
            stagger:0.1,
            scrollTrigger:{
                trigger:".rotateText",
                markers:false,
                start:"top 60%",
                end:"top -250%",
                scrub:2
            }
        })
    })
  return (
    <div id="section2" className="w-full min-h-screen text-center p-20 flex flex-col items-center justify-center">
      <h1 className="mt-10 text-gray-600 font-[thin] text-center text-2xl">© anzo.studio 2024 | designed and developed</h1>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">impactful</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">design</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">is the</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">design</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">that</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[42vw] tracking-loose text-black font-[regular] uppercase leading-[35vw]">works</h1>
      </div>

      <img src="../image.png" alt="" />
      <div className="w-1/4 border-[1px] mt-10 border-solid border-black mx-auto"></div>
    </div>
  );
};

export default Page2;
