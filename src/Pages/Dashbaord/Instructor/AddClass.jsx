import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext);

   
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const classItems = {
            image:data.Image,
            name:data.name,
            instructor:user?.displayName,
            email:user?.email,
            availableClasses: parseFloat(data.availableSets),
            students:parseFloat(data.students),
            price: parseFloat(data.price),
           
          };
        fetch("http://localhost:5000/addClass", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(classItems),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                
            });
        console.log(data);
        Swal.fire('Hurrah', ' class Successfully add', 'success');
    }
    return (
        <div>
        <div className='m-6'>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="pictureUrl" className="block mb-1"> Class Picture URL :</label>
              <input
                type="text"
                id="image"
                {...register('image')}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Instructor name" className="block mb-1">Instructor email:</label>
              <input
                type="text"
                id="email"
                {...register('email')}
                defaultValue={user?.email}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Instructor name" className="block mb-1">Instructor name:</label>
              <input
                type="text"
                id="instructor"
                {...register('instructor')}
                defaultValue={user?.displayName}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="availableSets" className="block mb-1">availableSeats</label>
              <input
                type="number"
                step="0.01"
                id="availableSets"
                {...register('availableSets', { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="students" className="block mb-1">students:</label>
              <input
                type="number"
                step="0.01"
                id="students"
                {...register('students', { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-1">Price:</label>
              <input
                type="number"
                step="0.01"
                id="price"
                {...register('price', { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="px-4 py-2 text-black bg-fuchsia-400 rounded hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    );
};

export default AddClass;