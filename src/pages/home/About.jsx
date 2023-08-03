import { motion } from "framer-motion";
import Resume from "../../../src/Resume.pdf";
import Zoom from "react-reveal/Zoom";

const About = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = { Resume };
    downloadLink.download = "VickyJay's Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <Zoom>
      <div>
        <h1 className={`font-ubuntu text-[30px] font-bold text-[#009DAE]`}>
          About
        </h1>
        <p
          className={`mt-[17px] text-black text-[17px] font-nunito font-normal w-[546px]`}
        >
          I have honed my skills in Web Development and I have core
          understanding of advance UI design principles. 1+ Years of experience.
          Specialized in building Websites, while ensuring a seamless web
          experience for end users. My specialty is Frontend Web Development,
          Turning Beautiful Designs into reality, semantic HTML & CSS.
        </p>
        <p
          className={`mt-[37px] text-black text-[17px] font-nunito font-normal w-[546px]`}
        >
          I have the ideal tools for developing JavaScript applications, and I
          can definitely work without them to produce quick, durable solutions
          that are designed for growth – performance and scalability are top
          objectives on my radar.
        </p>
        <p
          className={`mt-[17px] text-black text-[17px] font-nunito font-normal w-[546px]`}
        >
          I design, even though I{"'"}m probably not the typical designer
          sitting in front of an Illustrator art-board & tweaking pixels. You
          can always find me buried in stylesheets, fiddling with font sizes and
          thinking about layouts (~_^). Creating fluid user experiences is
          something I{"'"}m committed to doing while looking chic.
        </p>

        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDownload}
            className="text-white mt-[20px] bg-[#009DAE] shadow-cv rounded md:px-[30px] md:py-[19px] transition-all duration-500 hover:bg-[#009DAE]/80"
          >
            <a href={Resume} download="VickyJay.pdf" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.button>
        </div>
      </div>
    </Zoom>
  );
};

export default About;
