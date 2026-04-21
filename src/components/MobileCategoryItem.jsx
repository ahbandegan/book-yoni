import { Link } from "react-router-dom";

const MobileCategoryItem = ({ to, text, bg, color, tc }) => (
  <Link to={to}>
    <div
      className="w-full px-3 py-4 rounded-2xl flex items-center gap-2"
      style={{ color: color, background: bg }}
    >
      <i className="bi bi-circle-fill"></i>
      <p style={{ color: tc }} className="text-sm">{text}</p>
    </div>
  </Link>
);

export default MobileCategoryItem;
