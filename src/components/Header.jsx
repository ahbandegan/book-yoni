import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useHref } from "react-router-dom";
import {
  HeaderItem,
  Menu,
  MobileHeaderItem,
  MoblieCategories,
  QuickAccess,
  Search,
} from ".";
import {
  Gray,
  Green,
  GreenLight,
  GreenVarient,
  Orenge,
  OrengeLight,
  OrengeLightx2,
  Red,
  RedLight,
  RedLightx2,
} from "../utils/colors";
import GetWindowsSize from "../utils/getWindowsSize";
import { HeaderContext } from "../contexts/HeaderContext";
import $ from "jquery";
import CartItem from "./CartItem";

const Header = () => {
  const href = useHref();

  const { with: w } = GetWindowsSize();

  const loginRef = useRef(null);
  const alertRef = useRef(null);
  const favoriteRef = useRef(null);
  const divRef = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef();
  const filterRef = useRef();
  const moblieMenuRef = useRef();

  const [menuHover, setMenuHover] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerSize, setHeaderSize] = useState(0);

  const { basket, alert, favorite, basketItems } = useContext(HeaderContext);

  useEffect(() => {
    const $menu = $(menuRef.current);
    if (menuHover || menuToggle) {
      $menu.fadeIn(300);
    } else {
      $menu.fadeOut(300);
    }
    return () => {};
  }, [menuHover, menuToggle]);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderSize(headerRef.current.offsetHeight);
      }
    };

    const $filter = $(filterRef.current);
    const $mobileMenu = $(moblieMenuRef.current);
    const timeoutId = setTimeout(updateHeight, 1);

    window.addEventListener("resize", updateHeight);
    $filter.on("click", () => {
      $filter.fadeOut(100);
      $mobileMenu.addClass("translate-x-full");
    });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateHeight);
      $filter.off("click", () => {
        $filter.fadeOut(100);
        $mobileMenu.addClass("translate-x-full");
      });
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderSize(headerRef.current.offsetHeight);
      }
    };

    const timeoutId = setTimeout(updateHeight, 1);
    const $filter = $(filterRef.current);
    const $mobileMenu = $(moblieMenuRef.current);

    $filter.fadeOut(100);
    $mobileMenu.addClass("translate-x-full");

    return () => {
      clearTimeout(timeoutId);
    };
  }, [href]);

  const classes = classNames("flex", "items-center", "justify-between", "p-1");

  return (
    <div className="relative z-5">
      <div
        className="fixed hidden top-0 left-0 right-0 bottom-0 bg-black/50 z-10 backdrop-blur-[5px]"
        ref={filterRef}
      ></div>

      <div
        className="fixed top-0 right-0 bottom-0 w-[85%] bg-white translate-x-full z-11 transition-transform duration-600 overflow-y-auto"
        ref={moblieMenuRef}
      >
        <div className="w-full h-1/10" style={{ background: Green }}></div>
        <div className="flex flex-col gap-3 items-center justify-between h-9/10">
          <div className="p-3 w-full">
            <Search />
          </div>
          <hr />
          <div className="p-3 flex flex-col w-full gap-3">
            <p className="text-gray-400/30">صفحات</p>
            <MobileHeaderItem
              text="صفحه اصلی"
              isRoute={href == "/"}
              to="/"
              icon={<i className="bi bi-house"></i>}
            />
            <MobileHeaderItem
              text="فروشگاه"
              isRoute={href == "/shop"}
              to="/shop"
              icon={<i className="bi bi-shop"></i>}
            />
            <MobileHeaderItem
              text="وبلاگ"
              isRoute={href == "/blog"}
              to="/blog"
              icon={<i className="fa fa-blog"></i>}
            />
            <MobileHeaderItem
              text="درباره ما"
              isRoute={href == "/about"}
              to="/about"
              icon={<i className="bi bi-person"></i>}
            />
            <MobileHeaderItem
              text="تماس با ما"
              isRoute={href == "/contactus"}
              to="/contactus"
              icon={<i className="bi bi-telephone"></i>}
            />
          </div>
          <hr />
          <div className="p-3 flex flex-col w-full gap-3">
            <MoblieCategories />
          </div>
          <hr />
          <div className="p-3 flex flex-col w-full gap-3">
            <QuickAccess />
          </div>
          <div className="p-4 w-full bg-linear-to-l from-[#1a1a2e] to-[#16213e] text-white flex justify-between items-center">
            <div
              className="p-3 rounded-2xl flex items-center justify-center"
              style={{ background: Green }}
            >
              <i className="bi bi-phone text-3xl"></i>
            </div>
            اپلیکیشم یونی کتاب
            <Link to="" reloadDocument download>
              <div
                className="p-3 rounded-2xl flex items-center gap-2"
                style={{ background: Green }}
              >
                دانلود
                <i className="bi bi-download"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="w-full px-8 max-sm:px-2 py-4 border-b border-b-gray-400/30 flex flex-col fixed top-0 bg-white"
        ref={headerRef}
      >
        <div className={classes} ref={divRef}>
          <Link to="/">
            <img
              src="src/assets/images/logo.png"
              className="w-25 hover:scale-108 duration-400"
            />
          </Link>

          {w > 600 ? <Search /> : ""}

          {w > 600 ? (
            <div className="flex flex-row-reverse items-stretch gap-3.75 w-120">
              <button
                className="flex items-center py-3 px-5 rounded-xl text-white cursor-pointer transition"
                style={{ background: Green }}
                ref={loginRef}
                onMouseEnter={() => {
                  loginRef.current.style.background = GreenVarient;
                }}
                onMouseLeave={() => {
                  loginRef.current.style.background = Green;
                }}
              >
                <i className="fa fa-sign-in pe-5"></i>
                ورود | ثبت نام
              </button>

              <div
                className="w-12 rounded-2xl cursor-pointer flex flex-col justify-center items-center transition relative"
                style={{ background: GreenLight, color: Green }}
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
                {basket > 0 ? (
                  <div
                    className="absolute -top-2 -right-2 rounded-2xl size-5.75 flex justify-center items-center text-white"
                    style={{ background: Green }}
                  >
                    {basket}
                  </div>
                ) : (
                  ""
                )}
                <i className="bi bi-bag text-xl"></i>

                <div
                  className="absolute min-w-100 h-75 rounded-2xl shadow overflow-clip bg-white hidden mt-3 top-10 left-0"
                  ref={menuRef}
                >
                  <div
                    className="p-3 flex items-center justify-between text-white"
                    style={{ background: Green }}
                  >
                    <div className="flex gap-2 items-center p-2">
                      <i className="bi bi-bag text-xl"></i>
                      <p>سبد خرید</p>
                    </div>

                    <p
                      className="rounded-3xl text-[14px] py-2 px-3"
                      style={{ background: GreenLight }}
                    >
                      {`${basket} محصول`}
                    </p>
                  </div>
                  <div className="w-full h-3/4 overflow-y-auto">
                    {basketItems.map((item) => (
                      <CartItem item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="w-12 rounded-2xl cursor-pointer flex flex-col justify-center items-center transition relative"
                style={{ background: OrengeLightx2, color: Orenge }}
                ref={alertRef}
                onMouseEnter={() => {
                  alertRef.current.style.background = OrengeLight;
                }}
                onMouseLeave={() => {
                  alertRef.current.style.background = OrengeLightx2;
                }}
              >
                {alert > 0 ? (
                  <div
                    className="absolute -top-2 -right-2 rounded-2xl size-5.75 flex justify-center items-center text-white"
                    style={{ background: Orenge }}
                  >
                    {alert}
                  </div>
                ) : (
                  ""
                )}
                <i className="bi bi-bell text-xl"></i>
              </div>

              <div
                className="w-12 rounded-2xl cursor-pointer flex flex-col justify-center items-center transition relative"
                style={{ background: RedLightx2, color: Red }}
                ref={favoriteRef}
                onMouseEnter={() => {
                  favoriteRef.current.style.background = RedLight;
                }}
                onMouseLeave={() => {
                  favoriteRef.current.style.background = RedLightx2;
                }}
              >
                {favorite > 0 ? (
                  <div
                    className="absolute -top-2 -right-2 rounded-2xl size-5.75 flex justify-center items-center text-white"
                    style={{ background: Red }}
                  >
                    {favorite}
                  </div>
                ) : (
                  ""
                )}
                <i className="bi bi-heart text-xl"></i>
              </div>
            </div>
          ) : (
            <div className="flex flex-row-reverse items-stretch gap-3.75 w-120">
              <div
                className="flex items-center p-3 rounded-xl text-white cursor-pointer transition"
                style={{ background: Green }}
                onClick={() => {
                  $(filterRef.current).fadeIn(100);
                  $(moblieMenuRef.current).removeClass("translate-x-full");
                }}
              >
                <i className="fa fa-navicon"></i>
              </div>

              <div
                className="p-3 rounded-2xl cursor-pointer flex flex-col justify-center items-center transition relative"
                style={{ background: GreenLight, color: Green }}
                onMouseEnter={() => {
                  setMenuHover(true);
                }}
                onMouseLeave={() => {
                  setMenuHover(false);
                }}
                onClick={() => {
                  setMenuToggle(!menuToggle);
                  setMenuHover(false);
                }}
              >
                {basket > 0 ? (
                  <div
                    className="absolute -top-2 -right-2 rounded-2xl size-5.75 flex justify-center items-center text-white"
                    style={{ background: Green }}
                  >
                    {basket}
                  </div>
                ) : (
                  ""
                )}
                <i className="bi bi-bag text-xl"></i>

                <div
                  className="absolute w-80 h-75 rounded-2xl shadow overflow-clip bg-white hidden mt-3 top-10 left-0"
                  ref={menuRef}
                >
                  <div
                    className="p-3 flex items-center justify-between text-white"
                    style={{ background: Green }}
                  >
                    <div className="flex gap-2 items-center p-2">
                      <i className="bi bi-bag text-xl"></i>
                      <p>سبد خرید</p>
                    </div>

                    <p
                      className="rounded-3xl text-[14px] py-2 px-3"
                      style={{ background: GreenLight }}
                    >
                      {`${basket} محصول`}
                    </p>
                  </div>
                  <div className="w-full h-3/4 overflow-y-auto">
                    {basketItems.map((item) => (
                      <CartItem item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {w > 600 ? (
          <div
            className={classes
              .replace("p-1", "py-3 px-5")
              .replace("justify-between", "gap-10")
              .replace("items-center", "")}
          >
            <Menu />
            <span className="flex" style={{ color: Gray }}>
              |
            </span>
            <HeaderItem text="صفحه اصلی" isRoute={href == "/"} to="/" />
            <HeaderItem text="فروشگاه" isRoute={href == "/shop"} to="/shop" />
            <HeaderItem text="وبلاگ" isRoute={href == "/blog"} to="/blog" />
            <HeaderItem
              text="درباره ما"
              isRoute={href == "/about"}
              to="/about"
            />
            <HeaderItem
              text="تماس با ما"
              isRoute={href == "/contactus"}
              to="/contactus"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full" style={{ height: headerSize }}></div>
    </div>
  );
};

export default Header;
