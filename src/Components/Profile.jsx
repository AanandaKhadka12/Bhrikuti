import React,{useState,useEffect} from 'react'
import jwt_decode from "jwt-decode"

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({products:[]})

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:3001/api/user/${decodedToken.id}`
      );
      const json = await data.json();
      setProfileInfo(json);
    };

    fetchData().catch(console.error);
  }, [])
  

    
  return (<>
    <div>This is profile page</div>
    <p>{profileInfo.fullname}</p>
    <p>{profileInfo.username}</p>
    {profileInfo.products.map((product)=>{
      return<p>
        {product.category}
      </p>
    })}

    </>

  )
}

export default Profile