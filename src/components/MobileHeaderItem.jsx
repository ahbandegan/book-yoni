import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Gray, Green } from "../utils/colors";

const MobileHeaderItem = ({ to, text, isRoute, icon }) => {
  const divClasses = classNames(
    "flex",
    "items-center",
    "justify-between",
    "p-3",
    "rounded-2xl",
    {
      "bg-[#E6F5F0]": isRoute,
    },
  );
  return (
    <div className="flex flex-col gap-2">
      <Link to={to}>
        <div className={divClasses}>
          <div className="flex gap-3 items-center">
            <div
              className="bg-gray-400/10 flex items-center justify-center size-8 rounded-md"
              style={{
                background: isRoute ? Green : "",
                color: isRoute ? "white" : "black",
              }}
            >
              {icon}
            </div>
            <p className="transition" style={{ color: isRoute ? Green : Gray }}>
              {text}
            </p>
          </div>
          {isRoute ? (
            <i className="bi bi-check text-2xl" style={{color: Green}}></i>
          ) : (
            <svg
              className="size-4 transition-transform duration-300 rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ stroke: "oklch(70.7% 0.022 261.325)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </div>
      </Link>
    </div>
  );
};

MobileHeaderItem.prototype = {
  to: PropTypes.string,
  text: PropTypes.string,
  isRoute: PropTypes.bool,
  icon: PropTypes.element,
};
export default MobileHeaderItem;
