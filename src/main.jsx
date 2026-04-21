import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css";
import "./assets/css/output.css";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import App from "./App";
import Home from "./screens/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route index path="/shop" element={<p>test</p>} />
          <Route index path="/blog" element={<p>test</p>} />
          <Route index path="/about" element={<p>test</p>} />
          <Route index path="/contactus" element={<p>test</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
