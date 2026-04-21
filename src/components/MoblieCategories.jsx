import { useEffect, useRef, useState } from "react";
import { Blue, BlueLight, BlueVarient, Gray, Green, GreenLight, GreenVarient, Orenge, OrengeLight, OrengeLightx2, OrengeVarient, Pink, PinkLight, PinkVarient, Purple, PurpleLight, PurpleVarient, Red, RedLight, RedVarient } from "../utils/colors";
import $ from "jquery";
import { MobileCategoryItem } from ".";

const MoblieCategories = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const categoryesRef = useRef();

  useEffect(() => {
    $(categoryesRef.current).slideUp();
  }, [categoryesRef]);

  return (
    <div className="flex flex-col gap-3">
      <div
        className="bg-gray-400/10 w-full p-3 flex items-center justify-between rounded-2xl"
        onClick={() => {
          setMenuToggle(!menuToggle);
          $(categoryesRef.current).slideToggle(300);
        }}
      >
        <div className="flex gap-2 items-center">
          <div
            className="size-10 rounded-lg flex items-center justify-center"
            style={{ background: GreenLight, color: Green }}
          >
            <i className="bi bi-grid text-xl"></i>
          </div>
          دسته بندی محصولات
        </div>
        <div className="flex items-center justify-center p-2 rounded-lg bg-white border border-gray-400/30">
          <svg
            className={`size-4 transition-transform duration-300 ${menuToggle ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
              style={{ stroke: Gray }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2" ref={categoryesRef}>
        <MobileCategoryItem to="" bg={GreenLight} color={Green} tc={GreenVarient} text="دبستان" />
        <MobileCategoryItem to="" bg={BlueLight} color={Blue} tc={BlueVarient} text="کنکوری ها" />
        <MobileCategoryItem to="" bg={OrengeLight} color={Orenge} tc={OrengeVarient} text="کودکانه" />
        <MobileCategoryItem to="" bg={OrengeLightx2} color={Orenge} tc={OrengeVarient} text="لوازم تحریر" />
        <MobileCategoryItem to="" bg={PurpleLight} color={Purple} tc={PurpleVarient} text="ورزش ذهن" />
        <MobileCategoryItem to="" bg={PinkLight} color={Pink} tc={PinkVarient} text="اموزش انلاین" />
        <MobileCategoryItem to="" bg={GreenLight} color={Green} tc={GreenVarient} text="اکسسوری" />
        <MobileCategoryItem to="" bg={RedLight} color={Red} tc={RedVarient} text="کودم و نوزاد" />
      </div>
    </div>
  );
};

export default MoblieCategories;
