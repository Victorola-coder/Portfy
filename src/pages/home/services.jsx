import { motion } from "framer-motion";
import {
  Elipse,
  HalfElipse,
  Logic,
  Motion,
  Vctrl,
  WbDevIcon,
} from "../../assets/Icons";
import About from "./About";

export default function Services() {
  return (
    <div className={`relative bg-[#FFFFFF]`}>
      <div className="absolute animate-pulse">
        <HalfElipse />
      </div>

      <div className={`flex justify-between gap-[10px] px-[72px] py-[80px]`}>
        <div>
          <h1
            className={`font-ubuntu text-[#FF4F6E] font-bold md:text-[30px]  md:leading-[34.47px]`}
          >
            Services
          </h1>

          <div
            className={`relative flex flex-wrap items-center  gap-[16px] mt-[40px] transition-all duration-700 text-black`}
          >
            <motion.div
              whileHover={{ background: "#fff", scale: 1.1, color: "#2DD2E3" }}
              className={`flex flex-col gap-[20px] shadow-card rounded-[10px] px-[25px] py-[30px] bg-white max-w-[263px] max-h-[227px] w-full`}
            >
              <WbDevIcon />
              <h4 className={`text-[20px] font-ubuntu font-bold`}>
                WEB DEVELOPMENT
              </h4>
              <p className={`text-[15px] font-nunito font-normal`}>
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ background: "#fff", scale: 1.1, color: "#2DD2E3" }}
              className={`flex flex-col gap-[20px] shadow-card rounded-[10px] px-[25px] py-[30px] bg-white max-w-[263px] max-h-[227px] w-full`}
            >
              <Vctrl />
              <h4 className={`text-[20px] font-ubuntu font-bold`}>
                VERSION CONTROL
              </h4>
              <p className={`text-[15px] font-nunito font-normal`}>
                I can use version control systems well, and Git is my go-to-tool
              </p>
            </motion.div>
            <motion.div
              whileHover={{ background: "#fff", scale: 1.1, color: "#2DD2E3" }}
              className={`flex flex-col gap-[20px] shadow-card rounded-[10px] px-[25px] py-[30px] bg-white max-w-[263px] max-h-[227px] w-full`}
            >
              <Motion />
              <h4 className={`text-[20px] font-ubuntu font-bold`}>
                MOTION DESIGN
              </h4>
              <p className={`text-[15px] font-nunito font-normal`}>
                very good in video edting and manipulation
              </p>
            </motion.div>
            <motion.div
              whileHover={{ background: "#fff", scale: 1.1, color: "#2DD2E3" }}
              className={`flex flex-col gap-[20px] shadow-card rounded-[10px] px-[25px] py-[30px] bg-white max-w-[263px] max-h-[227px] w-full`}
            >
              <Logic />
              <h4 className={`text-[20px] font-ubuntu font-bold`}>
                WEB SCRAPING
              </h4>
              <p className={`text-[15px] font-nunito font-normal`}>
                Over a two years of experience building products for clients
                across africa.
              </p>
            </motion.div>
          </div>
          <span className={`absolute left-[50%] top-[50%]`}>
            <Elipse />
          </span>
        </div>
        <About />
      </div>
    </div>
  );
}
