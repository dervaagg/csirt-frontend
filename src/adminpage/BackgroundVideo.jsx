import vidBack from "../assets/vidWK.mp4";

const BackgroundVideo = () => {
  return (
    <>
      <div className="relative flex flex-co min-h-full rounded-lg">
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover overflow-hidden"
        >
          <source src={vidBack} type="video/mp4" />
        </video>
        <div className="absolute mt-10 ml-10">
          <h2
            className="text-zinc-300 font-sans subpixel-antialiased tracking-wide text-2xl font-semibold z-[1]"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 4)" }}
          >
            HI, WELCOME!
          </h2>
          <h1
            className="text-zinc-300 font-sans subpixel-antialiased tracking-wide text-4xl font-bold mb-2 drop-shadow-2xl z-[1]"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 4)" }}
          >
            DASHBOARD ADMIN CSIRT WSKT
          </h1>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
