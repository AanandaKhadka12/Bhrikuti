import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./Profile.css";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({ products: [] });
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:3001/api/user/${decodedToken.id}`
      );
      const json = await data.json();
      setProfileInfo(json);
    };

    fetchData().catch(console.error);
  }, []);
  let totalAmount = 0;
  profileInfo.products.map((pro)=>{
  
    totalAmount = totalAmount + pro.price;
    
  
  })
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 col-sm-12 username">
            <h3 className="mt-2">{profileInfo.fullname}</h3>
            <h4>Your Cart</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {profileInfo.products.map((product) => {
              return (
                <div className="card_ind w-80 mx-auto">
                  <img
                    src={require("../static/images/" + product.img)}
                    alt="myPic"
                    className="card_img"
                  />

                  <div className="card_info">
                    <span className="card_category">{product.category}</span>
                    <p className="price">${product.price}</p>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 total_amount">
            <p className="mt-2">TOTAL AMOUNT TO BE PAID: ${totalAmount}</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Profile;
