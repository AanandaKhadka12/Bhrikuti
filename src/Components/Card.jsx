import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='col-lg-3 col-sm-12'>

                    <div className='card__ind'>
                        <Link to="/login" ><img src={props.imgsour} alt="myPic" className="card__img" /></Link>
                            <div className="card__info">
                    
                                <span className="card__category">{props.catName}</span>
                                    
                    
                            </div>
                    </div>

    </div>
  )
}

export default Card