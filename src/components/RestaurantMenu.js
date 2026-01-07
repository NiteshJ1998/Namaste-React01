import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.010647&lng=72.8353005&restaurantId=58258&catalog_qa=undefined&submitAction=ENTER"
    );
    // https://corsproxy.io/?url=https://example.com

    const json = await data.json();

    console.log(json);
  };

  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>burgers</li>
        <li>chicken </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
