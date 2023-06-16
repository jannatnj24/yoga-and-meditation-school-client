import React from 'react';

const MyClassShow = ({Class,index}) => {
    return (
        <tr>
                            <th className='text-black'>{index + 1}</th>
                            <td className='text-black'>{Class.name}</td>
                            <td ><img src={Class.image} alt="" /></td>
                            <td className='text-black'>{Class.students}</td>
                            <td className='text-black'>${Class.price}</td>
                            <td><button className='text-purple-400 bg-purple-200 btn btn-sm'>pending</button></td>
                            <td><button className='text-purple-400 bg-purple-200 btn btn-sm'>Update</button></td>

                            
                            
                        </tr>
    );
};

export default MyClassShow;