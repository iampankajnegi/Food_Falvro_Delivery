import { useEffect, useState } from "react";
import FoodData from "../data/food";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesItem } from "../redux/slice/CategorySlice";

const CategoryMenu = ({ darkMode }) => {
  const dispatch = useDispatch();

  const selectedCategories = useSelector((state) => state.category.category);

  const [categories, setCategories] = useState([]);

  const listOfCategory = () => {
    const uniqueList = [...new Set(FoodData.map((food) => food.category))];

    setCategories(uniqueList);
  };

  useEffect(() => {
    listOfCategory();
  }, []);

  return (
    <div className="ml-6">
      <h3
        className={` text-xl font-semibold  ${
          darkMode ? "text-white" : "text-black"
        } `}
      >
        Find the best food{" "}
      </h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategoriesItem("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  transition-all ease-linear ${
            selectedCategories === "All" && "bg-green-500 text-white"
          } `}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategoriesItem(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  transition-all ease-linear ${
                selectedCategories === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
