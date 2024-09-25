import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/Cartslice"; // Make sure the import path is correct

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 my-3">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] cursor-grab hover:scale-110 transition-all duration-500 ease-in-out"
      />

      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.substring(0, 50)}...</p>

      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500" />
          {rating}
        </span>

        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white rounded-lg bg-green-500 hover:bg-green-600 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
