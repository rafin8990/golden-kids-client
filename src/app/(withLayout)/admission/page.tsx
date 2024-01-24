import React from 'react';
import FeaturesSlider from '@/Components/AdmissionComponents/FeaturesSlider';
import AdmissionForm from '@/Components/AdmissionComponents/AdmissionForm';
import AdmissionBanner from '@/Components/AdmissionComponents/AdmissionBanner';

const page = () => {
    return (
        <>
            <AdmissionBanner></AdmissionBanner>
            <FeaturesSlider></FeaturesSlider>
            <AdmissionForm></AdmissionForm>
        </>
    )
}

export default page