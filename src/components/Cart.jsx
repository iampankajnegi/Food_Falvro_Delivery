import { AiOutlineClose } from "react-icons/ai";
import Itemcard from "./Itemcard";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false); // Cart is hidden by default

  const cartItems = useSelector((state) => state.cart.cart);

  // Calculate total items in the cart
  const totalQty = cartItems.reduce(
    (totalItem, item) => totalItem + item.qty,
    0
  );

  // Calculate total amount in the cart
  const totalAmount = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  return (
    <>
      {cartItems.length > 0 && (
        <div
          className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${
            activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 ease-out z-50`}
        >
          <div className="flex justify-between items-center my-3">
            <span className="text-xl font-bold text-gray-800">My Order</span>
            <AiOutlineClose
              onClick={() => setActiveCart(!activeCart)}
              className="border cursor-pointer border-gray-500 text-gray-600 font-bold p-1 rounded-md hover:text-black-300 hover:border-green-300"
            />
          </div>

          {/* List of items in the cart */}
          {cartItems.map((foodItem) => (
            <Itemcard
              key={foodItem.id}
              id={foodItem.id}
              name={foodItem.name}
              price={foodItem.price}
              img={foodItem.img}
              qty={foodItem.qty}
            />
          ))}

          <div className="absolute bottom-0">
            <h3 className="font-semibold text-gray-600">
              Total Items: {totalQty}
            </h3>
            <h3 className="font-semibold text-gray-600">
              Total Amount: ₹{totalAmount}
            </h3>
            <hr className="w-[90vw] lg:w-[18vw] my-2" />
            <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5">
              <Link to="/sucess"> Checkout </Link>
            </button>
          </div>
        </div>
      )}

      {/* Shopping cart icon with bounce effect */}
      <AiOutlineShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed right-6 bottom-4 cursor-pointer ${
          totalQty > 0 ? "animate-bounce duration-500" : ""
        }`}
      />
    </>
  );
};

export default Cart;
