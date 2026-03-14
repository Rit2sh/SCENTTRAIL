import { useState } from "react";
export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const isWishlisted = (id) => wishlist.includes(id);
  return { toggleWishlist, isWishlisted };
}
