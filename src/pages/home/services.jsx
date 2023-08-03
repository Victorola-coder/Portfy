import { Elipse, WbDevIcon } from "../../assets/Icons";

export default function Services() {
  return (
    <div className={`relative bg-[#FFFFFF]`}>
      <div className="absolute">
        <Elipse />
      </div>

      <div className={`px-[72px] py-[80px]`}>
        <h1
          className={`font-ubuntu text-[#FF4F6E] font-bold md:text-[30px]  md:leading-[34.47px]`}
        >
          Services
        </h1>

        <div className={`mt-[40px]`}>
          <div
            className={`flex flex-col gap-[20px] rounded-[10px] p-2 bg-white max-w-[263px] max-h-[227px] w-full`}
          >
            <WbDevIcon />
            <h4 className={`text-[20px] font-ubuntu font-bold text-black`}>
              WEB DEVELOPMENT
            </h4>
            <p className={`text-[15px] font-nunito font-normal text-black`}>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
