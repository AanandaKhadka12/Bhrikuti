import React, { useEffect, useState } from 'react'
import { userService } from '../Services/userService'


const Product = () => {

  const [pData, setpData] = useState([])

  

  useEffect(() => {
      
   
    const fetchData = async () => {
    
      
      const data = await fetch('http://localhost:3001/api/product');
      const json = await data.json();
      setpData(json);

    }

    fetchData().catch(console.error);
  
   
  
  }, [])
  

  
  return (
    
    <>
    {pData.map((data)=>{
    
    return(<img src={require("../static/images/"+data.img)} />)
    
    })}
    </>
  )
}

export default Product