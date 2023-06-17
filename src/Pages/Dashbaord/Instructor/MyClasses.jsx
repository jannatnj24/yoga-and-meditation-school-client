import React, {  useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../Components/Providers/AuthProvider';
import MyClassShow from './MyClassShow';

const MyClasses = () => {
        const [myClasses, setMyClasses] = useState([]);
        const { user } = useContext(AuthContext);
        
        console.log(user)
        useEffect(() => {
            fetch(`https://yoga-and-meditation-school-server-tau.vercel.app/myClass/${user?.email}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setMyClasses(data);
              });
          }, [user]);
           console.log(myClasses)
        return (
            <div>
            
          <div>
    
          </div>
          <h1 className="text-center p-4  text-4xl font-bold">My Classes</h1>
      
          <div className='m-[40px]'>
          <div className="overflow-x-auto ">
      <table className="table  w-full">
        <thead>
          <tr className="bg-purple-400 text-black">
            <th>#</th>  
            <th>Class Name</th> 
            <th>Image</th> 
            <th>Price</th> 
            <th>Students</th>
            <th>Status</th>
            <th>Update</th>
            
          </tr>
        </thead> 
        <tbody>
        {myClasses?.map((Class, index) => (
                        <MyClassShow
                        Class={Class}
                        key={Class._id}
                        index={index}
                        ></MyClassShow>
                ))}
        </tbody> 
        
      </table>
    </div>
          </div>
      </div>
        );
    };


export default MyClasses;