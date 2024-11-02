import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoveHandler = (dets) => {
    setxVal(
      (dets.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        10
    );
    setyVal(
      (dets.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2) /
        5
    );
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      scale:1.015,
      rotateX: yVal,
      rotateY: xVal,
      duration: 5,
      ease: "power4.out",
    });
  }, [xVal, yVal]); 

  return (
    <div
      onMouseMove={mouseMoveHandler}
      className="w-full h-screen bg-white p-5 relative"
    >
      <div className='shadow-xl shadow-gray-700 w-full h-full rounded-[50px] bg-center bg-cover bg-[url("https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1865,h_913,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg")]'>
        <TiltText tiltRef={tiltRef} />
        <Page1Bottom />
        
      </div>
    </div>
  );
};

export default Page1;
