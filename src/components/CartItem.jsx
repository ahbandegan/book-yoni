import { Link } from "react-router-dom";
import { Gray } from "../utils/colors";

const CartItem = ({ item }) => {
  const priceOff = item.price - item.price * (item.off / 100);
  return (
    <div className="p-3 rounded-2xl bg-gray-400/5 border border-gray-400/30 m-4 flex items-center justify-between gap-2 text-black">
      <img
        src={""}
        alt={"item.name"}
        className="size-15 bg-amber-300 rounded-2xl"
      />
      <div className="flex flex-col justify-between h-full w-2/3">
        <p className="truncate line-clamp-1">{item.name}</p>
        {item.off > 0 ? <p>{`${priceOff} تومان`}</p> : ""}
        <p>{`${item.price} تومان`}</p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <button className="cursor-pointer">
          <i className="bi bi-trash" style={{ color: Gray }}></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
