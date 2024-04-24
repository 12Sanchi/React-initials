import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCardsearch = resInfo?.cards.find(
    (c) => c.groupedCard !== undefined
  );
  const { itemCards = [] } =
    itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
    {};
  // console.log(itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards || {});

  const categories =
    itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  /*const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "itemcards rendered",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );*/
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold my-6 text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

/*
 <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul>


import Shimmer from "./Shimmer"


import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info  {};

  const itemCardsearch = resInfo?.cards.find(
    (c) => c.groupedCard !== undefined
  );
  const { itemCards = [] } =
    itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    {};
  /*const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "itemcards rendered",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
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
export default RestaurantMenu;*/

/*import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  // resInfo?.cards[1]?.card?.card?.info;

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
  );
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
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  debugger;
  const { name, cuisines, costForTwoMessage } =
   resInfo?.cards[2]?.card?.card?.info  {};

  const itemCardsearch = resInfo?.cards.find(
    (c) => c.groupedCard !== undefined
  );
  const { itemCards = [] } =
    itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    {};
    /*const { itemCards } =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(
      "itemcards rendered",
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines?.join(", ")} - {costForTwoMessage}
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
  export default RestaurantMenu;*/
