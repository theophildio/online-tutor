import { useEffect, useState } from "react"
import { getCourcesFromDb } from "../LocalStorage/LocalStorage";

const useCart = (cources) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedcart = getCourcesFromDb();
    const savedCart = [];
    for(const id in storedcart) {
      const addedCources = cources.find(cource => cource.id === id);
      if (addedCources) {
        const quantity = storedcart[id];
        addedCources.quantity = quantity;
        savedCart.push(addedCources);
      }
    }
    setCart(savedCart);
  }, [cources]);
  return [cart, setCart];
}

export default useCart;