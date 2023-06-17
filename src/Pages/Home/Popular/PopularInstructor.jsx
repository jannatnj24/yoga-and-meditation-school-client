import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorLoadData from './InstructorLoadData';

const PopularInstructor = () => {
    const [Instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://yoga-and-meditation-school-server-tau.vercel.app/instructor')
            .then(res => res.json())

            .then(data => {setInstructors(data);
            });
    }, [])
    return (
        <section>
        <SectionTitle
            subHeading={'Yoga'}
            heading={"Popular Instructors"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {
                 Instructors?.map(Instructor => <InstructorLoadData
                    Instructor={Instructor}
                 ></InstructorLoadData>)
              }
       </div>
       </section>
    );
};

export default PopularInstructor;