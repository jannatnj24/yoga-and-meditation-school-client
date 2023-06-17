import React from 'react';

const ClassesTable = ({c,index}) => {

    const { name, image,students,instructor,availableSets,price } =c;
    return (
        <tr className=' text-black font-bold'>
        <th>{index+1}</th> 
       
      <td>{name}</td> 
      <td><img className='w-[60px] h-[40px] rounded-full' src={image} alt="" /></td> 
      <td>{instructor}</td> 
      <td>{availableSets}</td> 
      <td>{students}</td> 
      <td>{price}</td> 
     
      <td>
      <button className="btn btn-outline btn-sm  bg-purple-600">Approve</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm   bg-purple-600">Deny</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm  bg-purple-600">FeedBack</button>
        </td>
      
      
        
      </tr>
    );
};

export default ClassesTable;