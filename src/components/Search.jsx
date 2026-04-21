import { useState } from "react";
import { Gray, Green } from "../utils/colors";
import classNames from "classnames";
import GetWindowsSize from "../utils/getWindowsSize";

const Search = () => {
  const [isFoucus, setisFoucus] = useState(false);
  const size = GetWindowsSize();

  const classes = classNames(
    "border",
    "p-3",
    "w-150",
    "flex",
    "gap-2",
    "items-center",
    "rounded-xl",
    "transition",
    "bg-gray-400/5",
    {
      "border-gray-400/30": !isFoucus,
      "border-[#08D581]": isFoucus,
      "min-w-75": size.with > 600,
      "w-full": size.with < 600,
    },
  );

  return (
    <div className={classes}>
      <i
        className="bi bi-search text-2xl transition p-1"
        style={{ color: isFoucus ? Green : Gray }}
      ></i>

      <input
        onFocus={() => {
          setisFoucus(true);
        }}
        onBlur={() => {
          setisFoucus(false);
        }}
        className="border-none outline-none w-full"
        placeholder="جستجو کتاب، نویسنده، موضوع...."
      />
    </div>
  );
};

export default Search;
