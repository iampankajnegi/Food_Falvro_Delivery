import Foodcard from "./Foodcard";
import FoodData from "../data/food";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditem = () => {
  const categoryStore = useSelector((state) => state.category.category);

  const searchItem = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6  ">
        {FoodData.filter((food) => {
          if (categoryStore === "All") {
            return food.name.toLowerCase().includes(searchItem.toLowerCase());
          } else {
            return (
              categoryStore === food.category &&
              food.name.toLowerCase().includes(searchItem.toLowerCase())
            );
          }
        }).map((food) => {
          return (
            <Foodcard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default Fooditem;
