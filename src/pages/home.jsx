import Cart from "../components/Cart";
import CategoryMenu from "../components/categoryMenu";
import Fooditem from "../components/Fooditem";
import Navbar from "../components/navbar";

import { useDispatch, useSelector } from "react-redux";
import { toggleEvent } from "../redux/slice/ModeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleThemeToggle = () => {
    dispatch(toggleEvent());
  };

  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-black dark:bg-slate-800 "
            : "bg-white  dark:bg-slate-800"
        }`}
      >
        <button onClick={handleThemeToggle}>
          {darkMode ? (
            <FaSun className="text-yellow-500 text-8xl p-4" />
          ) : (
            <FaMoon className="text-blue-500 text-8xl p-4" />
          )}
        </button>
        <Navbar darkMode={darkMode} />
        <CategoryMenu darkMode={darkMode} />
        <Fooditem />
        <Cart />
      </div>
    </>
  );
};

export default Home;
