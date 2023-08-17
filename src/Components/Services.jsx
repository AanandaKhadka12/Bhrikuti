import React, {useState} from 'react';
import './Services.css';
import Card from './Card';

import img1 from '../static/images/handi3.jpg';
import img2 from '../static/images/pain1.jpg';
import img3 from '../static/images/scul1.jpg';
import img4 from '../static/images/cul4.jpg';


const Services = () => {
    const [cato, setCato] = useState([
        { 
          id: "cat1", 
          text: "Handicrafts", 
          img:img1
        },
        { 
          id: "cat2", 
          text: "Paintings",
          img:img2
        },
        { 
            id: "cat3", 
            text: "Sculptures", 
            img:img3
          },
          { 
            id: "cat4", 
            text: "Nepali Cultures",
            img:img4
          },
      ]);
  return (
    <>
    <div className="container-fluid"> 

        <div className="row">

            <div className="col-md-12 col-sm-12">


                <div className='services-title text-center'>

                    <p>Our Services</p>

                </div>

            </div>


        </div>
        
        
        <div className='card cards__all'>

            <div className='row'>
                {cato.map((catego)=>{
                
                return <Card  key={catego.id}
                catName={catego.text}
                imgsour={catego.img}
                />
                
                })}
                

            </div>


        </div>
    
    </div>
    
    </>
    
  )
}

export default Services;