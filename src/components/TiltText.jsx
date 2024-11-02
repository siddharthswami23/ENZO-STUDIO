import PropTypes from "prop-types";

const TiltText = ({ tiltRef }) => {
  return (
    <div
      id="tilt-in"
      ref={tiltRef}
      className="absolute top-1/2 left-20 -translate-y-1/2"
    >
      <h1 className="text-[6vw] leading-[6vw] uppercase cursor-pointer font-[bold] text-white tracking-tight">
        I am <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[7.5vw] leading-[6vw] uppercase cursor-pointer font-[bold] text-white tracking-tight">
        designer
      </h1>
      <h1 className="text-[6vw] leading-[6vw] uppercase cursor-pointer font-[bold] text-white tracking-tight">
        to hire
      </h1>
    </div>
  );
};

TiltText.propTypes = {
  tiltRef: PropTypes.object.isRequired,
};

export default TiltText;
