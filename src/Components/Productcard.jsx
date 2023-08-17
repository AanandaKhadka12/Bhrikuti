import React from "react";
import { Link } from "react-router-dom";
const Productcard = (props) => {
  return (
    <div className="col-lg-3 col-sm-12 cardz">
      <Link className="text-decoration-none"
        to={{
          pathname: `/productind/${props.id}`,
          state: props.id,
        }}
      >
        <div className="card__indp mb-3">
          
            <img
              src={require("../static/images/" + props.img)}
              alt="myPic"
              className="card__img"
            />
          
          <div className="card__info">
            <span className="card__category">{props.cat}</span>
            <p className="price">${props.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Productcard;
