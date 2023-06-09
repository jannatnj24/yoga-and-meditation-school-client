import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorLoadData from './InstructorLoadData';

const PopularInstructor = () => {
    const [Instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('classData.json')
            .then(res => res.json())

            .then(data => (data?.map(newData=>setInstructors(newData))));
    }, [])
    return (
        <section>
        <SectionTitle
            subHeading={'Yoga School'}
            heading={"Popular Instructors"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
              {
                 Instructors?.classes?.map(Instructor => <InstructorLoadData
                    Instructor={Instructor}
                 ></InstructorLoadData>)
              }
       </div>
       </section>
    );
};

export default PopularInstructor;