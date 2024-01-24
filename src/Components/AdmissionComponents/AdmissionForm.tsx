import React from 'react'
import InputField from './InputField'

const AdmissionForm = () => {
    return (
        <div id='admission' className='container mx-auto flex flex-col rounded-lg justify-center items-center my-32 py-20 bg-gray-200 shadow-lg'>
            <h1 className='text-gray-600 text-2xl font-bold mb-5'>Admission Form</h1>
            <form className='flex flex-col justify-center'>
                <div className='flex gap-5'>
                    <InputField
                        label='First Name'
                        name='fName'
                        placeholder="First Name"
                    />
                    <InputField
                        label='Last Name'
                        name='lName'
                        placeholder="Last Name"
                    />
                </div>
                <InputField
                    label='Guardian Name'
                    name='guardianName'
                    placeholder="Guardian Name"
                />
                <InputField
                    label='Guardian Phone'
                    name='guardianPhone'
                    placeholder="Guardian Phone Number"
                />
                <button type="button" className="border bg-[#08539a] border-gray-400 text-white rounded-md px-10 py-2 mx-2 mt-4 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Register</button>
            </form>
        </div>
    )
}

export default AdmissionForm