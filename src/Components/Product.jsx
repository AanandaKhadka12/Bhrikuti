import React, { useEffect, useState } from "react";
import { userService } from "../Services/userService";
import "./Product.css";
import Productcard from "./Productcard";
import { Link } from "react-router-dom"
import Productind from "./Productind";

const Product = () => {
  const [pData, setpData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/api/product");
      const json = await data.json();
      setpData(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
          <div className="cat_view">
            <h2>Handicrafts</h2>
          </div>
        </div>
        <div className="row row_all d-flex">
        {pData.map((data) => {
          {if (data.category=="handicrafts"){
          
           return ( <Link to={{ 
            pathname: `/productind/${data.id}`, 
           state:data.id
           }}>
            
           <Productcard
            key={data.id}
            id={data.id}
            cat={data.category}
            desc={data.description}
            img={data.img}
            price={data.price}
            
          /></Link>)
          }}
          
      
    })}
        </div>

        <div className="row">
          <div className="cat_view">
            <h2>Paintings</h2>
          </div>
        </div>
        <div className="row row_all">
        {pData.map((data) => {
          {if (data.category=="paintings"){
          
            return <Productcard
            key={data.id}
            id={data.id}
            cat={data.category}
            desc={data.description}
            img={data.img}
            price={data.price}
          />
          }}
          
      
    })}
        </div>

        <div className="row">
          <div className="cat_view">
            <h2>Sculptures</h2>
          </div>
        </div>
        <div className="row row_all">
        {pData.map((data) => {
          {if (data.category=="sculptures"){
          
            return <Productcard
            key={data.id}
            id={data.id}
            cat={data.category}
            desc={data.description}
            img={data.img}
            price={data.price}
          />
          }}
          
      
    })}
        </div>

        <div className="row">
          <div className="cat_view">
            <h2>Cultures</h2>
          </div>
        </div>
        <div className="row row_all">
        {pData.map((data) => {
          {if (data.category=="cultures"){
          
            return <Productcard
            key={data.id}
            id={data.id}
            cat={data.category}
            desc={data.description}
            img={data.img}
            price={data.price}
          />
          }}
          
      
    })}
        </div>

        
      

    </div>
  );
};

export default Product;
