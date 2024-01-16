import './App.css'
import {onAuthStateChanged} from 'firebase/auth';
import {useEffect, useState} from "react";
import {auth} from "./firebase.ts";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {SignIn} from "./signin/SignIn.tsx";

function App() {

    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useUserDispatcher();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoader(false);
            if (user) {
                userDispatcher({type: 'sign-in', user});
            } else {
                userDispatcher({type: 'sign-out'});
            }
        });
        return () => unsubscribe();
    }, []);


  return (
    <>
        {user ? <h1>To Do App</h1> : <SignIn/>}
    </>
  )
}

export default App
