import React from "react";
import "./DashboardCard.scss";

const DashboardCard =({title, stat}) => {
    return (
      <div className="styleCardContent">
        <p className="styleCardTitle">{title}</p>
        <p className="styleLocationLabel">{stat}</p>
      </div>
    );
  }
  
export default DashboardCard;
