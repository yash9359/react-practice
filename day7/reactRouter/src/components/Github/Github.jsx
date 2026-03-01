import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

   const data= useLoaderData()


    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yash9359').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);

    //     })
    // }, [])
    return (

        <>
          <div className='text-center m-4 bg-gray-800 text-white p-6 text-3xl font-semibold rounded-2xl shadow-lg border border-gray-700'>

                <p className='tracking-wide'>
                    Github Followers: <span className='font-bold text-yellow-300'>{data?.followers}</span>
                </p>

                <img
                    className='rounded-full shadow-xl w-60 h-60 mx-auto my-4 border-4 border-gray-300'
                    src={data?.avatar_url}
                    alt=""
                />

                <h2 className='text-4xl font-bold mt-3 tracking-wide'>
                    {data?.name}
                </h2>

            </div>





        </>


    )
}

export default Github

export const githubInfoLoader = async () => {
    try{
    const response = await fetch('https://api.github.com/users/yash9359');

    if(!response.ok)throw new Error("Failed to fetch")

    return response.json();
         

    }catch(err){
        console.error("Error fetching data:", err);
        throw err; 
    };
    
  
}
