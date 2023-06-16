import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
const InstructorLoadData = ({Instructor}) => {
  useEffect(() => {
    Aos.init({
      multiple: true,
    });
  }, []);
   
    const { instructorEmail, instructorName,instructorImage } =Instructor;
    return (
    <div className="card card-compact aos-item bg-purple-100 shadow-xl mx-auto" data-aos="fade-up">
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

export default InstructorLoadData;