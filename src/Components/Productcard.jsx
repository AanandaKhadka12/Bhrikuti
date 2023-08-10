import React from 'react'

const Productcard = (props) => {
    
  return (
      <div className="col-lg-3 col-sm-12">
          <div className="card__indp">
            <a href="proind.html" target="_blank">
              <img src={require("../static/images/"+props.img)} alt="myPic" className="card__img" />
            </a>
            <div className="card__info">
              <span className="card__category">{props.cat}</span>
              <p className="price">${props.price}</p>
            </div>
          </div>
        </div>
    

    
  )
}

export default Productcard