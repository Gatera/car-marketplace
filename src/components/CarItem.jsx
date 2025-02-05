import { Separator } from './ui/separator'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { IoOpen } from "react-icons/io5";

function CarItem({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 px-2 text-white rounded-sm'>New</h2>
        <img src={car?.image} alt={car?.name} width={'100%'} height={250} className='rounded-t-xl' />
        <div className='mx-4'>
            <h2 className='font-bold text-black text-lg my-2'>{car?.name}</h2>
            <Separator />
            <div className='grid grid-cols-3 my-5'>
              <div className='flex flex-col items-center'>
                <BsFillFuelPumpFill className='text-lg mb-2'/>
                <h2>{car.miles} Miles</h2>
              </div>
              <div className='flex flex-col items-center'>
                <IoIosSpeedometer className='text-lg mb-2'/>
                <h2>{car.fuelType}</h2>
              </div>
              <div className='flex flex-col items-center'>
                <GiGearStickPattern className='text-lg mb-2'/>
                <h2>{car.gearType}</h2>
              </div>
            </div>
            <Separator />
            <div className='my-2 flex items-center justify-between'>
              <h2 className='font-bold text-xl'>${car.price}</h2>
              <h2 className='text-primary text-sm flex gap-2 items-center'>View Details<IoOpen /></h2>
            </div>
        </div>
    </div>
  )
}

export default CarItem