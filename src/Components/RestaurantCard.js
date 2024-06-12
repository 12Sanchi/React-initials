import { CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  // const styleCard = {
  // ,
  //};

  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId} //resData.info..join(",")
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

/*export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};*/

export default RestaurantCard;
