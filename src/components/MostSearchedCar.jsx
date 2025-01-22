import FakeData from '@/shared/FakeData';
import React from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function MostSearchedCar() {
    console.log(FakeData.carList);
    
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center my-16'>Most Searched Cars</h2>

        <Carousel>
            <CarouselContent>
                {FakeData.carList.map((car, index)=> (
                    <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <CarItem car={car} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        
    </div>
  )
}

export default MostSearchedCar