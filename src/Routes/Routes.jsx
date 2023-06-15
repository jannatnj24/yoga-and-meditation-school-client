import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/UserLogin/Login/Login";
import SignUp from "../Pages/UserLogin/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
]);
