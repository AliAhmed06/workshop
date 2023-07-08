import React from 'react'
import { AiFillApple } from "react-icons/ai";

const getData = async () => {
  
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  response = await response.json();
  response = response.meals;
  
  // console.log(response);
  return response;
}

const page = async ({params}) => {
  let item = await getData();
  item = item.find((i) => i.idMeal == params.id)
  // console.log(item);
  return (
    <div>
        {item.strMeal}
        <AiFillApple />
      </div>
  )
}

export default page