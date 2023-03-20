export function filterdata(searchText, restaurant) {
  const filterData = restaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
