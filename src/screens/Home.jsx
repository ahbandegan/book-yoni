import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlueVarientx2, Green, GreenLight } from "../utils/colors";

const Home = () => {
  return (
    <div className="flex flex-col p-10 max-sm:p-4 w-full">
      <div className="flex sm:flex-row-reverse max-sm:flex-col max-sm:gap-7 justify-between w-full items-start">
        <div className="max-sm:w-full relative max-sm:mt-4 md:h-80">
          <div
            className="absolute inset-0 rounded-[30px] rotate-3 scale-105"
            style={{ background: GreenLight }}
          ></div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-[30px] overflow-hidden w-120 max-sm:w-full sm:h-full max-sm:h-70"
          >
            <SwiperSlide>
              <img
                src="src/assets/images/Slider1.webp"
                className="h-full object-cover"
                alt="Slider 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="src/assets/images/Slider4.webp"
                className="h-full object-cover"
                alt="Slider 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col max-sm:items-center gap-8">
          <p
            className="py-2 px-3 rounded-2xl text-sm flex gap-2 items-center w-fit"
            style={{ color: Green, background: GreenLight }}
          >
            <i className="bi bi-circle-fill"></i>
            فروشگاه تخصصی کتاب
          </p>

          <h2
            className="text-2xl font-black md:text-5xl"
            style={{ color: BlueVarientx2 }}
          >
            دنیای کتاب‌ها را <br /> <span style={{ color: Green }}>آنلاین</span>{" "}
            کاوش کنید
          </h2>

          <p className="text-[14px] md:text-[16px] text-gray-500 leading-8 mb-8 max-w-lg mx-auto lg:mx-0 max-sm:text-center">
            بیش از ۵۰ هزار عنوان کتاب از معتبرترین ناشران. ارسال رایگان به سراسر
            کشور با ضمانت اصالت کالا و بازگشت ۷ روزه.
          </p>

          <div className="flex w-full items-stretch gap-6 max-sm:flex-col">
            <Link to="/shop" className="max-sm:w-full">
              <div
                className="rounded-2xl p-4 flex justify-center items-center gap-5 max-sm:w-full text-white"
                style={{ background: Green }}
              >
                مشاهده فروشگاه
                <svg
                  className="size-4 transition-transform duration-300 rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                    style={{ stroke: "white" }}
                  ></path>
                </svg>
              </div>
            </Link>
            <Link to="/shop" className="max-sm:w-full">
              <div className="rounded-2xl p-4 flex justify-center items-center gap-2 max-sm:w-full border border-gray-500 text-gray-500 hover:text-[#08D581] hover:border-[#08D581] transition">
                <i className="bi bi-person text-xl"></i> درباره ما
              </div>
            </Link>
          </div>

          <hr />

          <div className="flex gap-8 items-stretch max-sm:justify-between max-sm:gap-0 max-sm:w-full">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-4xl" style={{ color: BlueVarientx2 }}>
                50K<span style={{ color: Green }}>+</span>
              </h3>
              <small className="text-gray-500 text-[10px]">عنوان کتاب</small>
            </div>

            <div className="w-px bg-gray-400/30"></div>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-4xl" style={{ color: BlueVarientx2 }}>
                200K<span style={{ color: Green }}>+</span>
              </h3>
              <small className="text-gray-500 text-[10px]">مشتری راضی</small>
            </div>

            <div className="w-px bg-gray-400/30"></div>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-4xl" style={{ color: BlueVarientx2 }}>
                98<span style={{ color: Green }}>%</span>
              </h3>
              <small className="text-gray-500 text-[10px]">رضایتمندی</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
