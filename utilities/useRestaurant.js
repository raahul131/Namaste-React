import { useState } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // get data from the API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2769573&lng=73.0362967&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
