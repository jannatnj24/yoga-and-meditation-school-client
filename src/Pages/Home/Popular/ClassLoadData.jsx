import React from 'react';

const ClassLoadData = ({Class}) => {
    console.log(Class)
    const { students, image,availableSets,price, name } =Class;
    return (
    <div className="card card-compact  bg-base-100 shadow-xl mx-auto">
    <figure><img className='w-[400px] h-[200px]' src={image} alt="" /></figure>
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