import React from 'react'

const Card = (props) => {
  return (
    <div className='col-lg-3 col-sm-12'>

                    <div className='card__ind'>
                        <a href="login.html" ><img src={props.imgsour} alt="myPic" className="card__img" /></a>
                            <div className="card__info">
                    
                                <span className="card__category">{props.catName}</span>
                                    
                    
                            </div>
                    </div>

    </div>
  )
}

export default Card