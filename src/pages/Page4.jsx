const Page4 = () => {
  return (
    <div className="w-full h-screen bg-white p-7">
      <div className="w-full h-full bg-black rounded-[50px] overflow-hidden relative">
        <h1 className="absolute font-[regular] uppercase text-[30vw] text-white tracking-wide left-10 -bottom-32">
          About
        </h1>
        <video
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Page4;
