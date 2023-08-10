import React from "react";
import { useState, useEffect } from "react";
import "./Productind.css";

const Productind = (props) => {
  const [pData, setpData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(props.location.state);
      const data = await fetch(
        `http://localhost:3001/api/productind/${props.location.state}`
      );
      const json = await data.json();
      setpData(json);
    };

    fetchData().catch(console.error);
  }, []);
  {
    
  }

  return (
    <div className="container mt-5">
      {pData.map((data)=>{
        
        return (<><div className="row p-3">

        <div className="col-lg-12">

          <p>Product>{data.category}</p>


        </div>

      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">

          <img src={require("../static/images/"+data.img)} height="300px" width="300px" alt="products" className="full_pic mb-5" />

        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="all_content">

            <p className="name mt-3">{data.category}</p>
            <strong className="reviewPoint">Rating 4.4</strong>
            <p className="price mb-3">Price: ${data.price}</p>
            <span className="delivery"><i className="fa fa-truck"></i> Get today!</span> <br />
            <button className="btn btn-primary mt-4 mb-4">Add to cart</button>

            <div className="desc">

                <h2>Description</h2>
                <p>{data.description}</p>

            </div>

          </div>


        </div>
      </div></>)
        
        })} 
      
    </div>
  );
};

export default Productind;
