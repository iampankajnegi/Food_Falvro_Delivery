import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/Cartslice";
import { increamentQty } from "../redux/slice/Cartslice";
import { decreamentQty } from "../redux/slice/Cartslice";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <MdOutlineDelete
        onClick={() => {
          dispatch(removeFromCart({ id }));

          toast(`${name} Removed`, {
            icon: "👏",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>

          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1
                  ? dispatch(decreamentQty({ id }))
                  : dispatch(removeFromCart({ id }))
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(increamentQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
