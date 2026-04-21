import $ from "jquery";
import { useContext, useEffect, useRef, useState } from "react";
import { MobileQuickAccessItem } from ".";
import {
  Blue,
  BlueLight,
  OrengeLight,
  OrengeLightx2,
  OrengeVarient,
  Red,
  RedLight,
} from "../utils/colors";
import { HeaderContext } from "../contexts/HeaderContext";

const QuickAccess = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const quickAccessRef = useRef();

  const { favorite, basket } = useContext(HeaderContext);

  useEffect(() => {
    $(quickAccessRef.current).slideUp();
  }, [quickAccessRef]);

  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full p-3 flex items-center justify-between rounded-2xl"
        style={{ background: OrengeLightx2 }}
        onClick={() => {
          setMenuToggle(!menuToggle);
          $(quickAccessRef.current).slideToggle(300);
        }}
      >
        <div
          className="flex gap-2 items-center"
          style={{ color: OrengeVarient }}
        >
          <div
            className="size-10 rounded-lg flex items-center justify-center"
            style={{ background: OrengeLight }}
          >
            <i className="bi bi-speedometer2 text-xl"></i>
          </div>
          دسترسی سریع
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
              style={{ stroke: OrengeVarient }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2" ref={quickAccessRef}>
        <MobileQuickAccessItem
          bg={Red}
          text="علاقه مندی ها"
          icon={
            <div
              className="p-3 rounded-lg"
              style={{ background: RedLight, color: Red }}
            >
              <i className="bi bi-heart"></i>
            </div>
          }
          count={favorite}
        />
        <MobileQuickAccessItem
          bg={Blue}
          text="سبد خرید"
          icon={
            <div
              className="p-3 rounded-lg"
              style={{ background: BlueLight, color: Blue }}
            >
              <i className="bi bi-bag"></i>
            </div>
          }
          count={basket}
        />
      </div>
    </div>
  );
};

export default QuickAccess;
