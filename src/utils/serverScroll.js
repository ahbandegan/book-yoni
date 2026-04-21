// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// function CartList() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView && !loading) {
//       loadMoreItems();
//     }
//   }, [inView]);

//   const loadMoreItems = async () => {
//     setLoading(true);
//     const newItems = await fetchItemsFromAPI(page);
//     setItems((prev) => [...prev, ...newItems]);
//     setPage((p) => p + 1);
//     setLoading(false);
//   };

//   return (
//     <div className="w-full h-3/4 overflow-y-auto">
//       {items.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))}

//       {/* این div وقتی به انتها رسید، آیتم‌های بعدی لود می‌شوند */}
//       <div ref={ref}>{loading && <div>در حال بارگذاری...</div>}</div>
//     </div>
//   );
// }
