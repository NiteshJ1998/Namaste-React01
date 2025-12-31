import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { name, cuisines, avgRatingString, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-card"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString} Stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default ResCard;
