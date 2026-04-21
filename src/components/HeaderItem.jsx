import PropTypes from "prop-types";
import { Gray, Green } from "../utils/colors";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderItem = ({ to, text, isRoute }) => {
  const [isHover, setIsHover] = useState(false);
  const classes = classNames(
    "h-0.5",
    "transition-all duration-400 ease-in-out",
    {
      "w-full": isRoute || isHover,
      "w-0": !isRoute || !isHover,
    },
  );

  return (
    <div className="flex flex-col gap-2">
      <Link to={to}>
        <p
          className="transition"
          style={{ color: isRoute || isHover ? Green : Gray }}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          {text}
        </p>
      </Link>
      <div className={classes} style={{ background: Green }}></div>
    </div>
  );
};

HeaderItem.prototype = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRoute: PropTypes.bool.isRequired,
};

export default HeaderItem;
