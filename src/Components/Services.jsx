import React, {useState} from 'react';
import './Services.css';
import Card from './Card';

const Services = () => {
    const [cato, setCato] = useState([
        { 
          id: "cat1", 
          text: "Handicrafts", 
          img:"https://imgcdn.floweraura.com/birthday_17.jpg?tr=w-300,h-300,dpr-1.5,q-70"
        },
        { 
          id: "cat2", 
          text: "Paintings",
          img:"https://imgcdn.floweraura.com/birthday_17.jpg?tr=w-300,h-300,dpr-1.5,q-70"
        },
        { 
            id: "cat3", 
            text: "Sculptures", 
            img:"https://imgcdn.floweraura.com/birthday_17.jpg?tr=w-300,h-300,dpr-1.5,q-70"
          },
          { 
            id: "cat4", 
            text: "Nepali Cultures",
            img:"https://imgcdn.floweraura.com/birthday_17.jpg?tr=w-300,h-300,dpr-1.5,q-70" 
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