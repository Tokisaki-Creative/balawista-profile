import React from "react";

import arrowIconYellow from "../../assets/general/icon-circle-arrow.svg";
import arrowIconRed from "../../assets/general/icon-circle-arrow-red.svg";

const ArrowIcon = (props) => {
  return (
    <a href={props.href ? props.href : "/"} className="group">
      <div className="flex flex-row items-center gap-4">
        <p className="bold text-md font-bold">View More</p>
        {props.color ? (
          props.color === "red" ? (
            <img
              src={arrowIconRed}
              alt="arrow-icon"
              className="w-12 group-hover:translate-x-3 group-hover:ease-in-out group-hover:duration-300"
            />
          ) : (
            <img
              src={arrowIconYellow}
              alt="arrow-icon"
              className="w-12 group-hover:translate-x-3 group-hover:ease-in-out group-hover:duration-300"
            />
          )
        ) : (
          <img
            src={arrowIconYellow}
            alt="arrow-icon"
            className="w-12 group-hover:translate-x-3 group-hover:ease-in-out group-hover:duration-300"
          />
        )}
      </div>
    </a>
  );
};

export default ArrowIcon;
