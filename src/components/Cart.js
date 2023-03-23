import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utilities/CartSlice";
import FoodItems from "./FoodItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={handleClearcart()}>
        Clear cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
