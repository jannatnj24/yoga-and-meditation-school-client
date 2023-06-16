import React from 'react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const MakeAdmin = user =>{
        fetch (`http://localhost:5000/users/admin/${user._id}`,{
            method :'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:` ${user.name} is admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const MakeInstructor = user =>{
        fetch (`http://localhost:5000/users/instructor/${user._id}`,{
            method :'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
     
    const handleDelete = user=> {
  
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    

    return (
        <div>
             <h2 className='text-4xl text-center text-black font-bold mb-20'>Users :{users.length}</h2>
           
            <div className="overflow-x-auto">
                <table className="table  w-full ">
                    <thead>
                        <tr className='bg-purple-400 text-black font-bold'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Role</th>
                            <th>Instructor Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className='text-black'>{index + 1}</th>
                                <td className='text-black'>{user.name}</td>
                                <td className='text-black'>{user.email}</td>

                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => MakeAdmin(user)}  className="btn btn-ghost bg-sky-400  rounded-full text-black"><FaUserSecret></FaUserSecret></button> 
                                    }</td>
                                <td>{ user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => MakeInstructor(user)} className="btn btn-ghost bg-sky-400  rounded-full text-black"> <FaUserTie></FaUserTie></button> 
                                    }</td>
                                <td><button  onClick={() => handleDelete(user)} className="btn btn-ghost rounded bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ManageUsers;