"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState("a");
    const [meals, setMeals] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    console.log("update:", search);

    const loadMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`); //sourch: the meal bd
            const data = await res.json();
            console.log(data.meals);
            setMeals(data.meals);
            setErrMessage('');
        } catch (error) {
            console.log(error.message);
            setErrMessage("No data found!");
        }
    }

    // useEffect(() => {
    //     loadMeal();
    // }, []);
    //we will get update meals data by every searching for search dependence.

    return (
        <div className=' mt-5'>
            <input onChange={handleSearch} type="text" placeholder='search meals' className=' p-2 outline-none bg-slate-200' />
            <button
                onClick={() => loadMeal()}
                className=' bg-blue-600 p-2 text-white'>search</button>

            <span className=' font-black float-end bg-orange-400 px-2'>Total meals: {meals.length}</span>

            <div className=' grid grid-cols-3 gap-7 my-5'>
                {
                    meals?.map((meal) => <div
                        key={meal.idMeal}
                        className=' bg-orange-50 border-2 border-slate-400 shadow-xl shadow-slate-400 p-2'>
                        {/* use next image tag with alt  */}
                        <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={400} height={400}  className=' p-2'/>
                        <h1 className=' text-2xl font-bold text-center text-orange-500 outline-black py-2'>{meal.strMeal}</h1>
                        <h1 className=' bg-blue-400 border border-black float-end px-2 py-1 ml-5'>{meal.strCategory}</h1>
                        <h1>{meal.strInstructions}</h1>
                    </div>)
                }
                {
                    errMessage && <h5 className=' text-red-600 text-xl'>No data found...</h5>
                }
            </div>
        </div>
    );
};

export default Meals;