import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resList = {
  restaurants: [
    {
      info: {
        id: "421565",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/fd744d31-8186-4571-94aa-8cdce998bfe4_421565.JPG",
        locality: "Dadar West",
        areaName: "Dadar West",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "6.0K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 03:00:00",
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
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "562",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/pizza-hut-dadar-west-rest421565",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "564273",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/d469db0a-e023-4767-97e0-23edac4adc91_564273.JPG",
        locality: "Lower Parel",
        areaName: "Lower Parel",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "6.0K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 01:45:00",
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
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "1.5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/mcdonalds-lower-parel-rest564273",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "24483",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/2d798d72-d898-4e17-81fe-bb79dc0e8043_24483.JPG",
        locality: "Greenville, Lokhandwala",
        areaName: "Prabhadevi",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        parentId: "2456",
        avgRatingString: "4.1",
        totalRatingsString: "15K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 23:59:00",
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
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/dominos-pizza-greenville-lokhandwala-prabhadevi-rest24483",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "613919",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/8d64eeb9-64bb-4e82-bb3f-c9df4dd72ef8_613919.JPG",
        locality: "Dadar West",
        areaName: "Dadar West",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "7.2K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 02:00:00",
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
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "704",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/kfc-dadar-west-rest613919",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "683310",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a68b0973-1eeb-43fd-9c94-cbcea4a3ca91_683310.jpg",
        locality: "Matulya Centre",
        areaName: "Lower Parel West",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "7.6K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 06:00:00",
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
          subHeader: "AT ₹49",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/burger-king-matulya-centre-lower-parel-west-rest683310",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "19008",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/26/55b30f35-a7a4-4896-84ea-fd92dd446660_19008.JPG",
        locality: "Lower Parel",
        areaName: "Lower Parel",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "15K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
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
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "1.9K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/theobroma-lower-parel-rest19008",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "853379",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/7171a29a-1e2b-4244-959d-ef5b57337c8f_853379.jpg",
        locality: "JUPITER TEXTILE MILLS",
        areaName: "OWC (One world centre)",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.3,
        parentId: "2",
        avgRatingString: "4.3",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 22:00:00",
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
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/subway-jupiter-textile-mills-owc-one-world-centre--rest853379",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "13151",
        name: "Gypsy Corner",
        cloudinaryImageId: "uc49yfb12ox4d0yzbig3",
        locality: "Dadar West",
        areaName: "Dadar West",
        costForTwo: "₹300 for two",
        cuisines: ["Maharashtrian", "Fast Food"],
        avgRating: 4.7,
        parentId: "92428",
        avgRatingString: "4.7",
        totalRatingsString: "55K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
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
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
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
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "5.1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/gypsy-corner-dadar-west-rest13151",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "619558",
        name: "Mag St. Bread Co",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/c5d9cfd0-8196-4e30-91e9-8fa1ba97c59a_619558.jpg",
        locality: "Senapati Bapat Marg",
        areaName: "Lower Parel",
        costForTwo: "₹800 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "230418",
        avgRatingString: "4.6",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    description: "Gourmet",
                    imageId: "newg.png",
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
          subHeader: "AT ₹110",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/mag-st-bread-co-senapati-bapat-marg-lower-parel-rest619558",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "122084",
        name: "La Folie",
        cloudinaryImageId: "coe0qjmatgeytr4xkp8q",
        locality: "SITARAM JADHAV MARG",
        areaName: "Lower Parel",
        costForTwo: "₹850 for two",
        cuisines: ["Desserts", "Bakery", "Cakes & Pastries"],
        avgRating: 4.8,
        parentId: "583",
        avgRatingString: "4.8",
        totalRatingsString: "3.1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "35",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/la-folie-sitaram-jadhav-marg-lower-parel-rest122084",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "767730",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
        locality: "Lodha Park",
        areaName: "Senapati Bapat Marg",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.3,
        veg: true,
        parentId: "4961",
        avgRatingString: "4.3",
        totalRatingsString: "2.0K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 05:00:00",
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
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/la-pinoz-pizza-lodha-park-senapati-bapat-marg-rest767730",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "570435",
        name: "CakeZone Patisserie",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/5628e8ef-2cb4-47a0-9237-f17e38d39e8c_570435.JPG",
        locality: "Moses Road",
        areaName: "Manjrekar Compound",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
        avgRating: 4.5,
        parentId: "7003",
        avgRatingString: "4.5",
        totalRatingsString: "1.6K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 03:00:00",
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
          subHeader: "AT ₹44",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/cakezone-patisserie-moses-road-manjrekar-compound-rest570435",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "103804",
        name: "Starbucks Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/50f3e84e-8358-453c-bcb5-d854b0e37499_103804.JPG",
        locality: "Dadar West",
        areaName: "Prabhadevi",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.6,
        parentId: "195515",
        avgRatingString: "4.6",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 20:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
              description: "Delivery!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
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
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "818",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/starbucks-coffee-dadar-west-prabhadevi-rest103804",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "806937",
        name: "Blue Tokai Coffee Roasters",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/999d95f5-67cf-407d-afe8-9aac92e0f860_806937.JPG",
        locality: "Prabhadevi",
        areaName: "Lower Parel Worli",
        costForTwo: "₹600 for two",
        cuisines: ["Cafe", "Coffee", "Beverages"],
        avgRating: 4.7,
        parentId: "2682",
        avgRatingString: "4.7",
        totalRatingsString: "290",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 0.1,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-12-31 20:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId: "High%20Protein/rx%20tag%204.png",
              description: "High Protein",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
                {
                  attributes: {
                    description: "High Protein",
                    imageId: "High%20Protein/rx%20tag%204.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
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
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/blue-tokai-coffee-roasters-prabhadevi-lower-parel-worli-rest806937",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "33838",
        name: "Poetry by Love & Cheesecake",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/f643eaa3-8bde-43d0-a41b-2503e66bf367_33838.JPG",
        locality: "Lower Parel",
        areaName: "Lower Parel",
        costForTwo: "₹800 for two",
        cuisines: [
          "Cakes & Pastries",
          "Desserts",
          "sandwich",
          "Cafe",
          "Continental",
          "Bakery",
          "Coffee",
          "Beverages",
        ],
        avgRating: 4.5,
        parentId: "11330",
        avgRatingString: "4.5",
        totalRatingsString: "11K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
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
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "1.2K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/poetry-by-love-and-cheesecake-lower-parel-rest33838",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "736038",
        name: "Deliciae by Bunty Mahajan",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/29/35bdf2fb-4107-4974-82bb-24e18b20270a_736038.JPG",
        locality: "Prabhadevi",
        areaName: "Lower Parel Worli",
        costForTwo: "₹500 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.7,
        veg: true,
        parentId: "70299",
        avgRatingString: "4.7",
        totalRatingsString: "2.2K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    description: "Gourmet",
                    imageId: "newg.png",
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
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/deliciae-by-bunty-mahajan-prabhadevi-lower-parel-worli-rest736038",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "690692",
        name: "Tossin Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/3e62acfe-b28c-48ed-8662-c6686481cd43_690692.jpg",
        locality: "Samsira Junction",
        areaName: "Worli",
        costForTwo: "₹1000 for two",
        cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
        avgRating: 4.5,
        parentId: "1778",
        avgRatingString: "4.5",
        totalRatingsString: "1.6K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-35 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 06:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                    description: "Gourmet",
                    imageId: "newg.png",
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
          subHeader: "AT ₹349",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "141",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/tossin-pizza-samsira-junction-worli-rest690692",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "49390",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/9458ebc4-3d66-480b-91ac-932504bba899_49390.jpg",
        locality: "Ambedkar Road",
        areaName: "Parel",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 4.6,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.6",
        totalRatingsString: "8.3K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
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
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹749",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/the-belgian-waffle-co-ambedkar-road-parel-rest49390",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "433400",
        name: "Wow! Momo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/fb8bdd85-663f-47f1-90d1-b38c411500c4_433400.jpg",
        locality: "Appa Saheb Marathe Marg",
        areaName: "Prabhdevi",
        costForTwo: "₹300 for two",
        cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
        avgRating: 4.1,
        parentId: "1776",
        avgRatingString: "4.1",
        totalRatingsString: "2.9K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
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
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
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
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/wow-momo-appa-saheb-marathe-marg-prabhdevi-rest433400",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "412214",
        name: "Good Flippin' Burgers",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/69f5547a-0c36-47a6-9524-52db530cc554_412214.JPG",
        locality: "Lower Parel",
        areaName: "Lower Parel",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
        avgRating: 4.6,
        parentId: "11748",
        avgRatingString: "4.6",
        totalRatingsString: "5.0K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-01-01 06:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
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
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
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
          subHeader: "AT ₹195",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "143",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-3dc0d627-6f44-4867-99be-83f7cacb1798",
      },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/good-flippin-burgers-lower-parel-rest412214",
        type: "WEBLINK",
      },
    },
  ],
};

const ResCard = ({ resData }) => {
  const { name, cuisines, avgRatingString, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="res-card"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString} Stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
