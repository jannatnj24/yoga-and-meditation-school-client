import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';



export const AuthContext= createContext(null);

const auth = getAuth(app);
const googleProvider= new  GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true);
console.log(user);
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}


const SignIn=(email,password)=>{
   setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

const profileUpdate=(displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{displayName,photoURL})
}

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser);
    if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data =>{
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }

    });

    return () =>{
       return unSubscribe();
    }
},[])


    const AuthInfo={

        user,
        loading,
        createUser,
        googleSignIn,
        SignIn,
        logOut,
        profileUpdate

       
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;