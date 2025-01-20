import Data from '@/shared/Data'
import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse by Type</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category, index) => (
                <div className='border rounded-xl p-3 items-center flex flex-col cursor-pointer hover:shadow-md'>
                    <img src={category.icon} alt={category.name} width={40} height={40} />
                    <h2 className='mt-2'>{category.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category