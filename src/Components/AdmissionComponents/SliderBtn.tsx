'use client'
import React, { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderBtn = ({ setCurrentSlider, currentSlider, features }: any) => {
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider: any) => (currentSlider === 0 ? features.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider: any) => (currentSlider === features.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    return (
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button onClick={prevSlider} className="flex justify-center items-center bg-black/30 hover:bg-white/70 rounded-full w-6 h-6 md:w-8 md:h-8">
                <IoIosArrowBack className="text-3xl mr-1 text-gray-300 hover:text-gray-500" />
            </button>
            {/* arrow right */}
            <button onClick={nextSlider} className="flex justify-center items-center bg-black/30 hover:bg-white/70 rounded-full w-6 h-6 md:w-8 md:h-8">
                <IoIosArrowForward className="text-3xl ml-1 text-gray-300 hover:text-gray-500" />
            </button>
        </div>
    )
}

export default SliderBtn