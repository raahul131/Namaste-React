import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../../utilities/useRestaurant";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmerui";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu"> 
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item?.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
