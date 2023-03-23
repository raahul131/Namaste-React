import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartSlice, { addItem } from "../../utilities/CartSlice";
import useRestaurant from "../../utilities/useRestaurant";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import Shimmer from "./shimmerui";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };
 
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />

        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-300"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div>
      <div>
        <h1 className="p-5">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items || {})?.map((item) => (
            <li key={item?.id}>
              {item?.name} -{" "}
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
