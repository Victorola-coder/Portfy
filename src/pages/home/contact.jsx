import { CirCircle, HalfMoon, LightCircle } from "../../assets/Icons";

const Contact = () => {
  return (
    <div>
      <div className={`bg-[#009DAE] relative w-full h-[262px]`}>
        <HalfMoon className={`absolute top-[30px] left-[50%]`} />
        <LightCircle className={`absolut top-[0px] right-[80%]`} />
        <CirCircle className={`absolute top-[0px] right-[80%]`} />
      </div>
    </div>
  );
};

export default Contact;
