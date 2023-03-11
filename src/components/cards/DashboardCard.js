import React from "react";
import "./DashboardCard.scss";

const DashboardCard =({title, location, description}) => {
    return (
      <div className="styleCardContent">
        <p className="styleCardTitle">{title}</p>
        <p className="styleLocationLabel">{location}</p>
        <p className="styleDescription">{description}</p>
      </div>
    );
  }
  
export default DashboardCard;
