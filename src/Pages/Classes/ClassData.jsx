import React from 'react';

const ClassData = ({c}) => {
    const {name,price,availableSets, image}=c;
    return (
        <div className= {`${availableSets === 0 ?
            "card rounded card-compact h-full   bg-red-900 text-white  shadow-xl"
            : "card  card-compact h-full    shadow-xl"
            }`}>
          <figure><img className=' h-[200px] w-[400px] ' src={image} alt="" /></figure>
          <div className="card-body bg-purple-100 ">
            <h2 className="card-title text-2xl "> Name: {name}</h2>
            <p className='text-primary-color '>availableSeats:{availableSets}</p>
            <p className='text-primary-color'>Price:${price}</p>
            <div className="card-actions justify-end">
            {/* <button onClick={() => handleAddToCart(Class)} className="btn btn-sm btn-outline btn-secondary">Select</button> */}
            </div>
          </div>
        </div>
    );
};

export default ClassData;