import React from 'react'
import HomeItem from './HomeItem';

const getData = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    response = await response.json();
    response = response.meals;
    
    return response;
}


const page = async () => {
  const data = await getData();

return (
    <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
        <div className='w-[40%] space-y-3 mt-10'>
            {data?.map((item) => (
                <HomeItem idMeal={item.idMeal} strMeal={item.strMeal} strMealThumb={item.strMealThumb} />
            ))}
        </div>
    </div>
  )
}

export default page