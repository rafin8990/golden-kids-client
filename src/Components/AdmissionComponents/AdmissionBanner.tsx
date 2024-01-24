import Image from 'next/image'
import React from 'react'
import AdmissionImage from "@/../public/images/admission.png";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";


const AdmissionBanner = () => {
    return (
        <div className='container mx-auto'>
            <div className="rounded-md bg-gray-200 shadow-xl pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-10">
                    <div className="flex-none ">
                        <Image
                            src={AdmissionImage}
                            alt="pic"
                            className="w-full rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                        />
                    </div>
                    <div className="col-span-2 flex-col text-gray-700 relative px-5 sm:px-0">
                        <p className="pt-4 text-2xl font-bold">Golden Kids Welfare Foundation(GKWF)</p>
                        <hr className="hr-text" data-content="" />
                        <div className="text-md flex flex-col justify-between px-4 my-2">
                            <div className='flex'>
                                <p className="text-2xl"><IoLocation></IoLocation></p>
                                <div className='flex flex-wrap ml-2'>
                                    <p className=""> House 🏘️ 4, Road 🛣️ 01, Block-B, Section-06,</p>
                                    <p className="">(Proshika Mor),Mirpur, Dhaka-1216</p>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <p className="text-2xl "> <IoMdCall></IoMdCall></p>
                                <p className="ml-2">+880 1323578802-3</p>
                            </div>
                        </div>
                        <p className="hidden md:block px-4 my-4 text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis itaque, non ratione molestiae, recusandae assumenda deleniti modi consectetur esse officia reiciendis quis est pariatur. Vero molestias est dolorem, accusantium quibusdam nihil repudiandae neque </p>
                        <p className="flex text-md px-4 my-2">
                            Admission Time: 9:00 AM - 5:00 PM
                            <span className="font-bold px-2">|</span>Except Friday
                        </p>
                        <div className="text-xs">
                            <button type="button" className="border bg-[#08539a] border-gray-400 text-white rounded-md px-8 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                                <a href="#admission">Enroll</a>
                            </button>
                            <button type="button" className="border border-gray-400 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline">About More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdmissionBanner;