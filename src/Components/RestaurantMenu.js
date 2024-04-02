import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[1]?.card?.card?.info;

  const itemCardsearch = resInfo?.cards.find(
    (c) => c.groupedCard !== undefined
  );
  const { itemCards } =
    itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  /*const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "itemcards rendered",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );*/
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
