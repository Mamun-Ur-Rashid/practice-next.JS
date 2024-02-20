'use client'

import { useState } from "react";

const HomePage = () => {

    const [count , setCount] = useState(0);
    return (
        <div className="w-1/2 mx-auto m-10 space-y-4">
            <h2>This is next app</h2>
            <h2 className="text-blue-500 font-bold">Counter : {count}</h2>
            <button className="btn border border-blue-100 p-2 mr-2 "
            onClick={()=> setCount (count + 1)}>
                Increment
            </button>
            <button className="btn border border-blue-100 p-2 "
            onClick={()=> setCount (count - 1)}>
                Decrement
            </button>
        </div>
    );
};

export default HomePage;
