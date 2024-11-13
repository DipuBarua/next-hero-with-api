import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    return (
        <div className=' m-5 p-3 border border-black rounded-md'>
            <h1 className=' text-3xl font-bold text-red-600'>Choose Your Meals</h1>
            <h1>Choose meals of you choice by searching........</h1>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;