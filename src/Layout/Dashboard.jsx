import React from 'react';
import { FaBook, FaMoneyBill, FaSchool, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../Components/Hooks/UseAdmin';
import UseInstructor from '../Components/Hooks/UseInstructor';

const Dashboard = () => {
    const [isAdmin]=UseAdmin();
    const [isInstructor]=UseInstructor();
//     const[cart]=UseCart();
//    console.log(cart)
//   const isAdmin=true;
//   const isInstructor=false;
      return (
          <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex  bg-purple-100 flex-col items-center justify-center">
     
      <label htmlFor="my-drawer-2" className="btn bg-purple-600 mb-4 mt-2 drawer-button lg:hidden">Open drawer</label>
   <Outlet></Outlet>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full    text-base-content  bg-purple-400">
        
        <div>
        <h2 className='text-black mx-20 text-6xl'><FaSchool></FaSchool></h2>
        <h2 className="text-black text-4xl font-bold mx-10 ">Yoga School   </h2>
        </div>
        <div className="divider"></div>
        {
          isAdmin? <>
          
           <li> <h4 className='text-4xl text-black font-bold mx-auto'>Admin Home</h4> </li>
  
           <li className='mb-6 text-black'><NavLink to="/dashboard/manageClass"><FaBook></FaBook> Manage Classes</NavLink> </li>
  
          <li className='text-black'><NavLink to="/dashboard/manageUsers"><FaUser></FaUser>Manage Users</NavLink> </li>
  
    </> :
     isInstructor?<> 
     <li className='mb-6 text-4xl text-black  font-bold'>Instructor Dashboard </li>
          <li className='mb-6 text-black'><NavLink to="/dashboard/addClass"><FaBook></FaBook> Add A Class</NavLink> </li>
          <li className='text-black'><NavLink to="/dashboard/myClasses"><FaMoneyBill></FaMoneyBill>my Classes</NavLink> </li>
    </> :
          
          <> 
          <li className='mb-6 text-4xl text-black font-bold'>User Dashboard </li>
           <li className='mb-6 text-black'><NavLink to="/dashboard/selectedClass"><FaBook></FaBook> My Selected Classes<span>
             </span></NavLink> </li>
          <li className='text-black'><NavLink to="/dashboard/enrollClass"><FaMoneyBill></FaMoneyBill>My Enrolled Classes</NavLink> </li>
    </>
        }
  
       
  
        <div className="divider"></div>
        <li><NavLink className='text-black  font-bold' to="/">Home</NavLink> </li>
              <li><NavLink className='text-black  font-bold' to="/instructors">Instructors</NavLink> </li>
              <li><NavLink className='text-black  font-bold' to="/classes">Classes</NavLink> </li>
      </ul>
    
    </div>
  </div>
      );
  };

export default Dashboard;