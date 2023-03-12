import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML(DOM)
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="data:image/png;base64,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"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config Driven UI

const restrauntList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "268485",
      name: "GULABJI SWEETS & RESTAURANT",
      uuid: "19dbe01c-679f-4838-90a1-c2a07d069196",
      city: "12",
      area: "Kukas",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "jkniw3xdhqpkpofb42k0",
      cuisines: ["South Indian", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "gulabji-sweets-&-restaurant-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "SHOP NO 34 SAI VATIKA SITUATED DELHI ROAD N H 8 KUKASAMER JAIPUR,   -  302028",
      locality: "Sai Vatika",
      parentId: 91312,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹100 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹100 off on orders above ₹449",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off on orders above ₹449 | Use code SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off on orders above ₹449 | Use code SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6159890~p=1~eid=00000186-cc7f-e5e5-0f31-5e6e0081014a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "268485",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "678570",
      name: "Shahi Darbar",
      uuid: "2c0eba01-6d76-42b4-bbde-5fa4e61860b9",
      city: "12",
      area: "Kukas",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "08e602c00526c459cd21285491d2b55f",
      cuisines: [
        "North Indian",
        "Chinese",
        "Beverages",
        "Biryani",
        "Snacks",
        "Thalis",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "shahi-darbar-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "Sr-7,8,9 near Arya engineering College  Ricco kukas Amber jaipur 302028, Jaipur-I  Ward 1, Jaipur, Rajasthan - 302028",
      locality: "Amber",
      parentId: 180675,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹500 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹500 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "678570",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "675420",
      name: "Kolkata Fast Food And Thali House",
      uuid: "9d2f82c3-c4d3-4bd9-a11d-cdd752e6b547",
      city: "12",
      area: "Kukas",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "f17eeab3d271a0a6c3ec4bf429cafbfe",
      cuisines: ["Chinese", "Indian", "Biryani", "Snacks"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "kolkata-fast-food-and-thali-house-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "41,RIICO INDUSTRIAL AREA KOOKAS,  Amber, Jaipur, Rajasthan - 302028",
      locality: "Amber",
      parentId: 404014,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "675420",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "623825",
      name: "First Love Cafe",
      uuid: "ee9ddc1d-25e1-4877-ae63-36223b90e04b",
      city: "12",
      area: "Kukas",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "yttohm85qsyldhbixieb",
      cuisines: ["Fast Food", "Snacks"],
      tags: [],
      costForTwo: 32000,
      costForTwoString: "₹320 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "first-love-cafe-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "Jaipur B21 Riico Residential Colony, Kukas, Rajasthan 302028, India",
      locality: "RIICO Industrial Area",
      parentId: 371064,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "623825",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "588730",
      name: "Out Of The Town",
      uuid: "7e8992d2-9fbe-4a99-97d9-0a77355028f3",
      city: "12",
      area: "Kukas",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "o4ead1la0m3akftlauch",
      cuisines: [
        "North Indian",
        "Beverages",
        "Chinese",
        "Snacks",
        "Italian",
        "Fast Food",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "out-of-the-town-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address: "SP 41 B RIICO INDUSTRIAL AREA KUKAS, Jaipur",
      locality: "RIICO Industrial Area",
      parentId: 352266,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "588730",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "586791",
      name: "SINGH'S TOWN CAFE",
      uuid: "5604f791-c2d5-4055-9b30-68fd32104e86",
      city: "12",
      area: "Kukas",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "y6etcl4erqlqaldnasqp",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "singh's-town-cafe-kukas-kukas",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "SR 58 khoda hostel, near JEC college, Kukas, Rajasthan 302028, India",
      locality: "Engineering College Road",
      parentId: 351096,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "586791",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
];

// const burgerking = {
//   name: "Burger King",
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ddfGie-zGDGZzanVqWVVi09aiZDXwhsn7xeHExwFZq_nmzo8gvhtw8OAz3fTt4oJoMk&usqp=CAU",
//   cusines: ["Burger", "American"],
//   rating: "4.2",
// };

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoString}</h4>
    </div>
  );
};


// no key (not acceptable) <<<<<< index key << unique key (best practice)
const Body = () => {
  return (
    <div className="restrauntlist">
      {restrauntList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>;
      })}
      {/* <RestrauntCard {...restrauntList[0].data} />
      <RestrauntCard {...restrauntList[1].data} />
      <RestrauntCard {...restrauntList[2].data} />
      <RestrauntCard {...restrauntList[3].data} />
      <RestrauntCard {...restrauntList[4].data} />
      <RestrauntCard {...restrauntList[5].data} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
