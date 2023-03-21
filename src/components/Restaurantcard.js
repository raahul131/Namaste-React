import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../../utilities/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-52 m-2 p-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4 className="font-semibold text-red-600">{costForTwoString}</h4>
      <h5 className="font-bold">{user.name}</h5>
      <h6 className="font-semibold">{user.email}</h6>
    </div>
  );
};

export default RestaurantCard;
