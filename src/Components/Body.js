import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  //Local State Variable -  Super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  //resObj
  console.log("Body rendered", listOfRestaurants);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //console.log("Body rendered", listOfRestaurants);

  //const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.16363&lng=91.7611838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("await", json);
    //Optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("data", json);

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const data = [
    {
      info: {
        id: "791635",
        name: "Pizza Hut",
        cloudinaryImageId: "978358a0d0caba4f4555b8e2147b467d",
        locality: "Bhangagarh",
        areaName: "Roodraksh Mall",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹189",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-bhangagarh-roodraksh-mall-guwahati-791635",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "126291",
        name: "UBQ by Barbeque Nation",
        cloudinaryImageId: "o6dxh5fwq42okjlumkcm",
        locality: "Paltan Bazaar",
        areaName: "Ulubari",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "10804",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-paltan-bazaar-ulubari-guwahati-126291",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "794739",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_794739.JPG",
        locality: "Bhangaghar",
        areaName: "Rudraksh Mall",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.4,
        parentId: "547",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-bhangaghar-rudraksh-mall-guwahati-794739",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "513070",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Paltan Bazaar",
        areaName: "Ulubari",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-paltan-bazaar-ulubari-guwahati-513070",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "651213",
        name: "McDonald's",
        cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
        locality: "Beltola",
        areaName: "Ganeshguri",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-beltola-ganeshguri-guwahati-651213",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "69258",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "The Hub",
        areaName: "Bhangagarh",
        costForTwo: "₹700 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
        parentId: "2456",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 00:55:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-the-hub-bhangagarh-guwahati-69258",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "67477",
        name: "J 14",
        cloudinaryImageId: "072ed186f9c71f5f632ee918f5b6cd93",
        locality: "GS Road",
        areaName: "Bhangagarh",
        costForTwo: "₹250 for two",
        cuisines: ["Snacks"],
        avgRating: 4.3,
        parentId: "5282",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/j-14-gs-road-bhangagarh-guwahati-67477",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "473559",
        name: "Starbucks Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/72c40439-ac4f-4aee-a973-0f1455d88550_473559.JPG",
        locality: "GS Road",
        areaName: "Christian Basti",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.5,
        parentId: "195515",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-gs-road-christian-basti-guwahati-473559",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "76500",
        name: "Fat Belly",
        cloudinaryImageId: "6614fa9bdbc5559dd5f05aecb2caf980",
        locality: "Chandmari",
        areaName: "Chandmari",
        costForTwo: "₹300 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Tibetan",
          "Fast Food",
          "Snacks",
          "Thai",
        ],
        avgRating: 4.5,
        parentId: "8251",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Chinese.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Chinese.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/fat-belly-chandmari-guwahati-76500",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "681814",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "0002f5bb9fd8add169a00160753def17",
        locality: "F A Road",
        areaName: "Paltan Bazaar",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.8,
        veg: true,
        parentId: "582",
        avgRatingString: "4.8",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Ice-creams.png",
              description: "Delivery!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-f-a-road-paltan-bazaar-guwahati-681814",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "625203",
        name: "NIC Ice Creams",
        cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
        locality: "GS Road",
        areaName: "Christian Basti",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.7,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.7",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nic-ice-creams-gs-road-christian-basti-guwahati-625203",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "291148",
        name: "Barista Coffee",
        cloudinaryImageId: "b64bf721e12e7b3df82c832898999c51",
        locality: "City Center Mall",
        areaName: "Christian Basti",
        costForTwo: "₹350 for two",
        cuisines: ["Beverages", "Snacks", "Desserts"],
        avgRating: 4.5,
        parentId: "416281",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 46,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 21:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/barista-coffee-city-center-mall-christian-basti-guwahati-291148",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "625204",
        name: "Grameen Kulfi",
        cloudinaryImageId: "jqai8kf3wlirmfllunmv",
        locality: "GS Road",
        areaName: "Christian Basti",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.7,
        veg: true,
        parentId: "12175",
        avgRatingString: "4.7",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/grameen-kulfi-gs-road-christian-basti-guwahati-625204",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "793351",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "58abba330fd6086e4a14f2b78e6cb64e",
        locality: "Rehabari",
        areaName: "NARAYAN HEIGHTS",
        costForTwo: "₹250 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.8,
        veg: true,
        parentId: "5588",
        avgRatingString: "4.8",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Ice-creams.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-rehabari-narayan-heights-guwahati-793351",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "83770",
        name: "Mast Biryani",
        cloudinaryImageId: "288abbc58babf7b063b256e729b045b9",
        locality: "Zoo Road",
        areaName: "Zoo Tiniali",
        costForTwo: "₹450 for two",
        cuisines: ["Biryani", "Tandoor", "Mughlai", "Punjabi"],
        avgRating: 4.4,
        parentId: "8229",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mast-biryani-zoo-road-zoo-tiniali-guwahati-83770",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "386752",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "p8xnoflwjab9qgcdaxqi",
        locality: "AK Azad Road",
        areaName: "Paltan Bazaar",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "4961",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-ak-azad-road-paltan-bazaar-guwahati-386752",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "639468",
        name: "Dum Safar Biryani",
        cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
        locality: "Paltan Bazaar",
        areaName: "LACHIT NGR",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
        avgRating: 4.3,
        parentId: "351013",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dum-safar-biryani-paltan-bazaar-lachit-ngr-guwahati-639468",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "861730",
        name: "Pastas By Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fab829ba-c521-4530-bcff-936e26f42d36_861730.JPG",
        locality: "Bhangagarh",
        areaName: "Roodraksh Mall",
        costForTwo: "₹400 for two",
        cuisines: ["Pastas"],
        avgRating: 4.5,
        parentId: "306806",
        avgRatingString: "4.5",
        totalRatingsString: "9",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-bhangagarh-roodraksh-mall-guwahati-861730",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "579712",
        name: "GetAWay-Ice Creams & Desserts",
        cloudinaryImageId: "8194c8fed09497bce3714d2586653545",
        locality: "Kachari Basti Road",
        areaName: "Ulubari",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts", "Healthy Food", "Sweets"],
        avgRating: 4.6,
        veg: true,
        parentId: "354819",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-kachari-basti-road-ulubari-guwahati-579712",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "793370",
        name: "Gourmet Ice Cream Cakes by Baskin Robbins",
        cloudinaryImageId: "290b6a1480b1b45d5fc8f2d1ad58ec8e",
        locality: "NARAYAN HEIGHTS",
        areaName: "Rehabari",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream Cakes", "Desserts", "Ice Cream", "Bakery"],
        avgRating: 4.5,
        veg: true,
        parentId: "21932",
        avgRatingString: "4.5",
        totalRatingsString: "5",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-04 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-narayan-heights-rehabari-guwahati-793370",
        type: "WEBLINK",
      },
    },
  ];

  if (onlineStatus === false)
    return <h1>Looks like you're offline!! Please check your connection</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-violet-300 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //console.log("Body rendered", listOfRestaurants)   // listOfRestaurants;

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
          <label>UserName : </label>
          <input
            className="border border-black p-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        -
      </div>
    </div>
  );
};
/*  {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
             )}    */
export default Body;
