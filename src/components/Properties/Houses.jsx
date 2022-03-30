import React from "react";
import Img12 from "../assets/images/img12.png";
import Star from "../assets/svg/star-icon.svg";
import Naria from "../assets/svg/Naria.svg";
import Heart from "../assets/svg/bi_heart.svg";
import pictures from "./pictures";

const Houses = ({ house }) => {
  return (
    <div>
      <div className="houses">
        <div className="houses__main">
          <div className="view">
            <img src={house.img} alt="" />
          </div>
          <div className="houselocation">
            <p>{house.para1}</p>
            <h5>{house.header}</h5>
            <p className="para2">{house.para2}</p>
            <div className="rating">
              <img src={pictures.Star} alt="" />
              <span>4.5</span>
            </div>
          </div>

          <div className="payment">
            <img
              src={Heart}
              width="24px"
              height="24px"
              alt=""
              className="heart"
            />
            <div className="naria">
              <img src={Naria} alt="" />
              <span className="bold">
                {house.para3}
                <span className="gray">/monthly</span>
              </span>
            </div>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
