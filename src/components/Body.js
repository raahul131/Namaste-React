import { restaurantList } from "../config";
import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmerui";

function filterdata(searchText, restaurant) {
  const filterData = restaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

// no key (not acceptable) <<<<<< index key << unique key (best practice)
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.0319414&lng=75.8882508&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }

  console.log("render");

  // not render component(Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurants Matches Your Filter!!!</h1>;

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
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <restaurantCard {...restaurantList[0].data} />
        <restaurantCard {...restaurantList[1].data} />
        <restaurantCard {...restaurantList[2].data} />
        <restaurantCard {...restaurantList[3].data} />
        <restaurantCard {...restaurantList[4].data} />
        <restaurantCard {...restaurantList[5].data} />
        <restaurantCard {...restaurantList[6].data} />
        <restaurantCard {...restaurantList[7].data} />
        <restaurantCard {...restaurantList[8].data} />
        <restaurantCard {...restaurantList[9].data} />
        <restaurantCard {...restaurantList[10].data} />
        <restaurantCard {...restaurantList[11].data} />
        <restaurantCard {...restaurantList[12].data} />
        <restaurantCard {...restaurantList[13].data} />
        <restaurantCard {...restaurantList[14].data} /> */}
      </div>
    </>
  );
};

export default Body;
