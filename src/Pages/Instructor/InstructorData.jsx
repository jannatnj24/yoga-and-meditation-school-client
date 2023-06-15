import React from 'react';

const InstructorData = ({i}) => {
   
    const { instructorEmail, instructorName,instructorImage } =i;
    return (
    <div className="card card-compact  bg-purple-100 shadow-xl mx-auto">
    <figure><img className='w-[400px] h-[300px]' src={instructorImage} alt="" /></figure>
    <div className="card-body">
      <p className="card-title">  {instructorName}</p>
      <p className="card-title"> {instructorEmail}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
    );
};

export default InstructorData;