import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const ClassLoadData = ({Class}) => {
  useEffect(() => {
    Aos.init({
      multiple: true,
    });
  }, []);
   
    const { students, image,availableSets,price, name } =Class;
    return (
    <div className="card card-compact aos-item bg-purple-100 shadow-xl mx-auto" data-aos="fade-up">
    <figure><img className='w-[400px] h-[300px]' src={image} alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title"> class Name: {name}</h2>
      <p>students :{students}</p>
      <p>availableSets :{availableSets}</p>
      <p>Price :${price}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
    );
};

export default ClassLoadData;