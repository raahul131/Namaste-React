import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
}) => {
  return (
    <div className="w-52 m-2 p-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;
