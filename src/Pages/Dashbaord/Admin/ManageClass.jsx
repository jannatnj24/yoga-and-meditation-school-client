import React, { useEffect, useState } from 'react';
import ClassesTable from './ClassesTable';

const ManageClass = () => {
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


        <div>
           
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr className='bg-purple-400 text-black font-bold'>
                            <th>#</th>
                            <th>Name</th>
                        
                            <th>image</th>
                            <th>Instructor </th>
                            <th>availableSets </th>
                            <th>Student</th>
                            <th>Price </th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                   classes?.map((c ,index )=> <ClassesTable
                                      key={c._id}
                                      c={c}
                                      index={index}
                                   ></ClassesTable>)
              }
      </tbody>
                </table>
            </div>
        </div>
      
    );
};


export default ManageClass;