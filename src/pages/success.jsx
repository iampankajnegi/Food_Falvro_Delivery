import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {emptyCart} from "../redux/slice/Cartslice"


const Success = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div
          onClick={() => dispatch(emptyCart())}
          className=" text-3xl text-center font-semibold mb-4 "
        >
          <Link to="/">
            
            <h2>Order Successful</h2>
          </Link>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
