import { useEffect, useRef, useState } from "react";
import { Gray, Green, GreenLight } from "../utils/colors";
import $ from "jquery";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuRef = useRef();
  const [menuHover, setMenuHover] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const $menu = $(menuRef.current);
    if (menuHover || menuToggle) {
      $menu.fadeIn(300);
    } else {
      $menu.fadeOut(300);
    }
    return () => {};
  }, [menuHover, menuToggle]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setMenuHover(true);
      }}
      onMouseLeave={() => {
        setMenuHover(false);
      }}
      onClick={() => {
        setMenuToggle(!menuToggle);
      }}
    >
      <p
        className="transition cursor-pointer flex items-center gap-1"
        style={{ color: menuHover || menuToggle ? Green : Gray }}
      >
        <i className="fa fa-navicon"></i>
        دسته بندی کالا ها
        <svg
          className={`size-4 transition-transform duration-300 ${menuHover || menuToggle ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
            style={{ stroke: menuHover || menuToggle ? Green : Gray }}
          ></path>
        </svg>
      </p>
      <div
        className="absolute min-w-200 min-h-50 rounded-2xl shadow overflow-clip bg-white hidden mt-3"
        ref={menuRef}
      >
        <div
          className="p-3 flex items-center justify-between"
          style={{ background: Green }}
        >
          <div className="flex gap-2 items-center p-2 text-white">
            <i className="bi bi-grid text-2xl"></i>
            <p>دسته بندی محصولات</p>
          </div>

          <Link
            to="/shop"
            className="rounded-3xl text-[14px] py-2 px-3"
            style={{ background: GreenLight }}
          >
            مشاهده همه
          </Link>
        </div>
        <div className="w-full h-3/4 overflow-y-auto"></div>
      </div>
    </div>
  );
};

export default Menu;
