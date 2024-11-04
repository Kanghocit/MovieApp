import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "TRANG CHỦ", icon: <HiHome size={"20px"} /> },
    { name: "TÌM KIẾM", icon: <HiMagnifyingGlass size={"20px"} /> },
    { name: "XEM SAU", icon: <HiPlus size={"20px"} /> },
    { name: "NGUỒN GỐC", icon: <HiStar size={"20px"} /> },
    { name: "PHIM", icon: <HiPlayCircle size={"20px"} /> },
    { name: "THỂ LOẠI", icon: <HiTv size={"20px"} /> },
  ];

  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-8">
        <img
          src={"light-logo.svg"}
          alt="Logo"
          className="w-[50px] md:w-[40px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} icon={<HiDotsVertical size={"20px"} />} />
            {toggle ? (
              <div className="absolute white mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4  ">
                {menu.map(
                  (item, index) =>
                    index > 3 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src="ảnh.jpg" className="w-[40px] rounded-full" alt="" />
    </div>
  );
};

export default Header;
