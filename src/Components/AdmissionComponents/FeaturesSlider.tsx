'use client'
import React, { useEffect, useState } from 'react';
import SliderBtn from './SliderBtn';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdCastForEducation } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";
import { AiOutlineUngroup } from "react-icons/ai";

const FeaturesSlider = () => {
    const features = [
        {
            id: 1,
            name: 'Best Teacher',
            description: 'Encouraging Children to Develop there Potential as Life Long Learners!',
            icon: <LiaChalkboardTeacherSolid />
        },
        {
            id: 2,
            name: 'Best Education',
            description: '“Giving the very best to every child and giving importance to their all round development”',
            icon: <MdCastForEducation />
        },
        {
            id: 3,
            name: 'Best Students',
            description: 'Our Mission is to Inspire Dreams, Empower Minds & Strengthen Upcomming Community',
            icon: <FaPeopleRoof />
        },
        {
            id: 4,
            name: 'Best Environment',
            description: 'Creating a nurturing and sustainable environment to foster learning and growth.',
            icon: <SiHomeadvisor />
        },
        {
            id: 5,
            name: 'Extra Feature',
            description: 'A brief description of the extra feature you want to highlight.',
            icon: <AiOutlineUngroup />
        },
    ];

    const [currentSlider, setCurrentSlider] = useState(0);
    const [isSmallScreen, setScreenSize] = useState(false);
    
    useEffect(() => {
        const screenSize = window.innerWidth <= 768;
        setScreenSize(screenSize)
    }, []);

    return (
        <div className="-mt-12 w-full sm:w-4/6 xl:w-3/5 mx-auto">
            <div className="relative overflow-hidden">
                <SliderBtn
                    currentSlider={currentSlider}
                    setCurrentSlider={setCurrentSlider}
                    features={features}
                ></SliderBtn>

                <div
                    className="ease-linear duration-300 flex "
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>

                    {features.map((each, idx) => (
                        <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                            <div className="h-full w-full p-8  rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-[url(/images/admissionCardBg.jpg)] bg-cover">
                                <div className='text-3xl text-yellow-500'>{each.icon}</div>
                                <h3 className='text-white text-lg font-semibold'>{each.name}</h3>
                                <p className='text-md text-gray-300'>{each.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSlider;