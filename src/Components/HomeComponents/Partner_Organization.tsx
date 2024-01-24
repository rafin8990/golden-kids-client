import React from 'react';

const Partner_Organization = () => {
    return (
        <div className='md:py-8'>
            <h1 className='md:text-3xl font-semibold text-center py-3'>Take a look at our clients</h1>
            <h6 className='text-yellow-600 text-center '>We did a great job with these companies, You can be next to work with!</h6>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto gap-10 md:pt-20'>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/aston -martin.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/bbc.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/chanel.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/google.jpg" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/mastercard.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/instagram.jpg" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/new york time.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/nissan.png" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/tesco.jpg" alt="" />
                </div>
                <div>
                    <img className='w-56 h-36 shadow-xl hover:scale-110 duration-500 transition-transform' src="../images/versace.png" alt="" />
                </div>
            </div>
            <h6 className='font-bold text-center text-xl py-5 md:pt-12'>Be smart, Let us do our job.</h6>
            <div className='text-center'>
                <button className='bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 py-3 px-7 rounded-full text-white'>Try Us Out</button>
            </div>
        </div>
    );
};

export default Partner_Organization;