import Link from 'next/link'
import React from 'react'

const HomeItem = ({idMeal, strMeal, strMealThumb}) => {
  return (
    <div className='bg-gray-300 w-full flex gap-10'>
        <img src={strMealThumb} alt={strMeal} className='h-[100px] w-[100px] rounded-md' />
        <div className='flex flex-col items-start justify-end w-full'>
            <h2 className='text-md font-bold'>{strMeal}</h2>
            <Link href={`/home/${idMeal}`}>see details</Link>
        </div>
    </div>
  )
}

export default HomeItem
