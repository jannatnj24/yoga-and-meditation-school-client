import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const {data: isInstructor, isLoading: isLoadInstructor} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isLoadInstructor]
}
export default UseInstructor;