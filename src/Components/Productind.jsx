import React from "react";
import { useState, useEffect } from "react";
import "./Productind.css";
import jwt_decode from "jwt-decode";

const Productind = (props) => {
  const [pData, setpData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:3001/api/productind/${props.location.state}`
      );
      const json = await data.json();
      setpData(json);
    };

    fetchData().catch(console.error);
  }, []);

  const onItemClick = async (item) => {
    const token = window.sessionStorage.getItem("token");

    if(token){
    const decodedToken = jwt_decode(token);

      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      };
      const result = await fetch(
        `http://localhost:3001/api/update/${decodedToken.id}`,
        requestOptions
      );
      if(result){
        window.location.replace('/profile')
      }
    }else{
      window.location.replace('/login')
    }

   
  };

  return (
    <div className="container mt-5">
      {pData.map((data) => {
        return (
          <>
            <div className="row p-3">
              <div className="col-lg-12">
                <p>{`Product>`+data.category}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <img
                  src={require("../static/images/" + data.img)}
                  height="300px"
                  width="300px"
                  alt="products"
                  className="full_pic mb-5"
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="all_content">
                  <p className="name mt-3">{data.category}</p>
                  <strong className="reviewPoint">Rating 4.4</strong>
                  <p className="price mb-3">Price: ${data.price}</p>
                  <span className="delivery">
                    <i className="fa fa-truck"></i> Get today!
                  </span>{" "}
                  <br />
                  <button
                    onClick={(e) => onItemClick(data)}
                    className="btn btn-primary mt-4 mb-4"
                  >
                    Add to Cart
                  </button>
                  <div className="desc">
                    <h2>Description</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Productind;
