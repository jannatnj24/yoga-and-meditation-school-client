import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Instructor = () => {
    const [ins, setIns] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setIns(data);
              });
    }, [])
      
    return (

        <section className='p-14'>
        <SectionTitle 
        subHeading={"All"}
        heading={"Instructors"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4 ">
        {
                 ins?.map(i => <ClassData
                    key={c._id}
                  c={c}
                 ></ClassData>)
              }
       </div>
       </section>
    );
};


export default Instructor;