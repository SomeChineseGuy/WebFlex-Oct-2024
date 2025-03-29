import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const ProductItem = () => {
  const params = useParams();
  const naviagate = useNavigate();
  

  // console.log(params);

  useEffect(() => {
    // fetch(`/api/getData/${params.id}`)
  },[])

  const goToHomepage = () => {
    // naviagate('/home')
    naviagate(-2)
  }

  // req.params.id
  return (
    <div>
      <h1>This is a single product - {params.id}</h1>
      <button onClick={goToHomepage}>Home!</button>
    </div>
  )
};

export default ProductItem;
