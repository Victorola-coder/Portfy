import logo from "../../images/logo.png";

const navbar = () => {
  const Links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Home",
      path: "/",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="top_gradient"></div>
      <nav className="mx-auto mt-[19px] ml-[18px] mr-[15px] flex justify-between items-center  md:ml-[70px] md:mr-[70px]  md:mt-[33px]">
        <a href="/">
          <div className="flex items-center -space-x-[10px]">
            <img src={logo} alt="logo" />
            <span className="font-capriola font-semibold text-[20px] leading-6 md:text-[30px] md:leading-[34.72px] ">
              ickyJay
            </span>
          </div>
        </a>
        <div className="navbar_gradient"></div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-between space-x-7">
            <li className="font-roboto md:text-[15px] lg:text-[16px] text-[#4C686F] leading-[18.75px] ">
              <a href="#">Home</a>
            </li>
            <li className="font-roboto md:text-[14px] leading-5 lg:text-[16px] text-[#4C686F] lg:leading-[18.75px] ">
              <a href="#">Services</a>
            </li>
            <li className="font-roboto md:text-[14px] leading-5 lg:text-[16px] text-[#4C686F] lg:leading-[18.75px] ">
              <a href="#">About</a>
            </li>
            <li className="font-roboto md:text-[14px] leading-5 lg:text-[16px] text-[#4C686F] lg:leading-[18.75px] ">
              <a href="#">Portfolio</a>
            </li>
            <li className="font-roboto md:text-[14px] leading-5 lg:text-[16px] text-[#4C686F] lg:leading-[18.75px] ">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="bg-[#009DAE] sm:pt-[10px] rounded-[5px] md:pt-[13px] md:pb-[12px] px-[16px] font-ubuntu font-bold text-[15px] leading-[17.24px] text-[#FFFFFF] max-[w-[68px] ">
            Let{"'"}s Talk
          </button>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
