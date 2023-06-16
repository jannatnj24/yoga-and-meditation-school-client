import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
        <div className=" text-white p-10 rounded-lg shadow-xl bg-purple-100 animate-bounce">
        <img  src={`https://i.ibb.co/vhXJcKy/404.webp`} alt="404" className="mt-8 w-[800px] mb=6  " />
        </div>
        <p><Link to="/" className="bg-purple-500 text-white px-4 py-2 rounded-md">
         Back to Home
      </Link></p>
      </div>
      
        </div>
       
    );
};

export default Error;