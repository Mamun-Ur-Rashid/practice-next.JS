import Image from 'next/image';
import React from 'react';

const NotFountPage = () => {
    return (
        <div className='grid grid-cols-2 gap-8 m-10 mt-20 justify-center items-center w-3/4 mx-auto  bg-slate-100'>
            <div>
                <Image src="https://i.ibb.co/DCs96RR/error.jpg" alt="notfound" 
                width={500} height={500} />
            </div>
            <div>
                <h2 className='text-5xl text-red-600 font-bold my-4 text-center'>404!!</h2>
                <p className='text-center'>Not Found Page!</p>
            </div>
        </div>
    );
};

export default NotFountPage;