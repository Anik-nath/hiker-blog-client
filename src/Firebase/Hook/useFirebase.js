import { useState } from "react";
import initializeFirebase from "../Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isloading,setIsLoading] = useState(true);

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn= (location,navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, provider)
        .then(() => {
         alert("sign up successfully");
         setError('');
         const destination = location?.state?.from || '/';
         navigate(destination);
        }).catch((error) => {
         setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

    //observe user
    useEffect(()=>{
        const Subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
            }
            setIsLoading(false);
            return () => Subscribe;
          });
    },[auth])

    //create new user
    const createUser=(email,password,location,navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('successfully create user')
            setError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }
    //login with email and password
    const login =(email,password,location,navigate)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("login successfully");
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=> setIsLoading(false))
    }

    //signout
    const signout =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setError('');
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=> setIsLoading(false))
    }

    return {
        user,
        googleSignIn,
        signout,
        createUser,
        login,
        error,
        handleShow,
        handleClose,
        show,
        isloading,
    }
}
export default useFirebase;