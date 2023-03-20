import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmerui";
import { Link } from "react-router-dom";
import { filterdata } from "../../utilities/helper";
import useOnline from "../../utilities/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants(); // API call
  }, []);

  const isOnline  = useOnline();
  if (!isOnline) {
    return <h1>Offline, Plase check your internet connection!!</h1>;
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.0319414&lng=75.8882508&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[1]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards);
  }

  // not render component(Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
