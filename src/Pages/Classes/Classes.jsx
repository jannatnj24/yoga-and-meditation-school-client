import React, { useEffect, useState } from 'react';
import ClassData from './ClassData';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://yoga-and-meditation-school-server-tau.vercel.app/classes')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setClasses(data);
              });
    }, [])
      
    return (

        <section className='p-14'>
        <SectionTitle 
        subHeading={"All"}
        heading={"Class"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4 ">
        {
                 classes?.map(c => <ClassData
                    key={c._id}
                  c={c}
                 ></ClassData>)
              }
       </div>
       </section>
    );
};

export default Classes;