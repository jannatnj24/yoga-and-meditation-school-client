import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/UserLogin/Login/Login";
import SignUp from "../Pages/UserLogin/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import Error from "../Pages/Error/Error";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashbaord/Student/SelectedClass";
import EnrollClass from "../Pages/Dashbaord/Student/EnrollClass";
import ManageClass from "../Pages/Dashbaord/Admin/manageClass";
import ManageUsers from "../Pages/Dashbaord/Admin/manageUsers";
import AddClass from "../Pages/Dashbaord/Instructor/AddClass";
import MyClasses from "../Pages/Dashbaord/Instructor/MyClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path : '/instructor',
                element : <Instructor></Instructor>,
            },
            {
                path : '/classes',
                element :<Classes></Classes>,
            },
            {
              path : '/login',
                element : <Login></Login>
            },
            {
              path : '/signUp',
                element : <SignUp></SignUp>
            }
        ]
    },
    {
      
        path : 'dashboard',
        element :<Dashboard></Dashboard>,
        children :[

          {
            path : 'selectedClass',
            element : <SelectedClass></SelectedClass>
          },
          {
            path : 'enrollClass',
            element : <EnrollClass></EnrollClass>
          },

          {
            path : 'manageClass',
            element : <ManageClass></ManageClass>
          },
          {
            path : 'manageUsers',
            element : <ManageUsers></ManageUsers>
          },
          
          
          {
            path : 'addClass',
            element : <AddClass></AddClass>
          },
          {
            path : 'myClasses',
            element : <MyClasses></MyClasses>
          },
        
          
        ]
      
    },
]);
