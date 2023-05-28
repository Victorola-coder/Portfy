import heroimg from "../../images/heroimg.png";

const hero = () => {
  return (
    <div className={`mx-auto mt-[53px]`}>
      <main className={`mx-auto flex  justify-center items-center `}>
        <div className="">
          <img src={heroimg} className={`ml-[50px]`} alt="hero image" />
        </div>

        <div>
          <h1
            className={`text-[#FF4F6E] mx-auto text-[25px] font-bold leading-[28.73px] font-ubuntu`}
          >
            Hello, I’m VickyJay
          </h1>
          <p
            className={`font-ubuntu font-bold text-[60px] text-[#253235] leading-[68.84px] max-w-[520px]`}
          >
            Professional Web Developer, Video Editor & Graphics Designer
          </p>
        </div>
      </main>
    </div>
  );
};

export default hero;
