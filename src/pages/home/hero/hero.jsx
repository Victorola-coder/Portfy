import { motion } from "framer-motion";
import heroimg from "../../../assets/images/heroimg.png";
import { FbIcon, IgIcon, InIcon, TwIcon } from "../../../assets/Icons";
const Hero = () => {
  return (
    <div className={`mx-auto mt-[53px]`}>
      <main
        className={`flex flex-col items-center flex-wrap md:flex md:flex-row md:justify-between md:items-center `}
      >
        <div className="">
          <img
            src={heroimg}
            draggable={false}
            className={`md:ml-[50px] max-w-[300px] md:max-w-[500px]`}
            alt="hero image"
          />
        </div>

        <div className={`flex flex-col md:gap-[38px]`}>
          <div>
            <h1
              className={`text-[#FF4F6E] font-ubuntu font-bold md:text-[25px] md:leading-[28.73px] `}
            >
              Hello, I’m VickyJay
            </h1>
            <p
              className={`font-ubuntu font-bold text-[#253235]  md:text-[60px] md:leading-[68.84px] md:max-w-[520px]`}
            >
              Frontend Developer.
            </p>
            <small className={`md:mt-3 text-base font-capriola`}>
              I like to craft solid and scalable frontend <br /> products with
              great user experiences.
            </small>
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className={`bg-[#FF4F6E] md:px-[34px] md:py-[18px] text-center rounded shadow-hire font-ubuntu text-[17px] leading-normal font-bold text-white transition-all duration-500 hover:bg-[#009DAE]`}
            >
              Hire Now
            </motion.button>
          </div>
          <div className={`w-[264px] h-[3px] bg-line`}></div>

          <div className={`flex items-center gap-[32px]`}>
            <motion.a
              href="https://web.facebook.com/victortoluu"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.99 }}
              className={`h-auto w-auto`}
            >
              <FbIcon
                className={`h-[30px] w-[30px] cursor-pointer border-[#009DAE] rounded-full p-1 border-[2px] border-solid transition-all duration-500 hover:bg-[#CFFAFF]`}
              />
            </motion.a>
            <motion.a
              href="https://twitter.com/HeyVickyJay"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.99 }}
              className={`h-auto w-auto`}
            >
              <TwIcon
                className={`h-[30px] w-[30px] cursor-pointer border-[#009DAE] rounded-full p-1 border-[2px] border-solid transition-all duration-500 hover:bg-[#CFFAFF]`}
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/vickyjayox"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.99 }}
              className={`h-auto w-auto`}
            >
              <IgIcon
                className={`h-[30px] w-[30px] cursor-pointer border-[#009DAE] rounded-full p-1 border-[2px] border-solid transition-all duration-500 hover:bg-[#CFFAFF]`}
              />
            </motion.a>
            {/* <span className={`h-auto w-auto`}>
              <InIcon
                className={`h-[30px] w-[30px] border-[#009DAE] rounded-full  border-[2px] border-solid`}
              />
            </span> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
