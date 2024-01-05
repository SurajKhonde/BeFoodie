import { ReactNode, createContext, useContext, useState } from "react";

interface ICartContext {
  product: any | [];
  addToCart: (cart: any) => void;
}

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
});

interface ICartContextProvider {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [product, setProduct] = useState<any>([]);

  const addToCart = (cart: any) => {
    //write login of add to cart
    setProduct((prevCart: any) => [...prevCart, cart]);
  };

  return (
    <CartContext.Provider value={{ product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
