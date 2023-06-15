import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassLoadData from './ClassLoadData';

const PopularClass = () => {
    const [Class, setClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())

            .then(data => {setClass(data);
            });
    }, [])
    return (
        <section>
        <SectionTitle
            subHeading={'Yoga'}
            heading={"Popular Classes"}
        ></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {
                   Class?.map(Class => <ClassLoadData
                    Class={Class}
                   ></ClassLoadData>)
                }
         </div>
         </section>
    );
};

export default PopularClass;