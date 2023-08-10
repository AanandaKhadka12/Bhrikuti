import React from 'react'
import {useState,useEffect} from 'react'

const Productind = (props) => {
  const [pData, setpData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(props.location.state)
      const data = await fetch(`http://localhost:3001/api/productind/${props.location.state}`);
      const json = await data.json();
      setpData(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>

        {pData.map((data)=>{
        
        return <img src={require("../static/images/"+data.img)} />
        
        })}

    </div>
  )
}

export default Productind