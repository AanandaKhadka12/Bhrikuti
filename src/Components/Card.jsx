import React from 'react'

const Card = (props) => {
  return (
    <div className='col-lg-3 col-sm-12'>

                    <div className='card__ind'>
                        <a href="login.html" ><img src={props.imgsour} alt="myPic" class="card__img" /></a>
                            <div class="card__info">
                    
                                <span class="card__category">{props.catName}</span>
                                    
                    
                            </div>
                    </div>

    </div>
  )
}

export default Card