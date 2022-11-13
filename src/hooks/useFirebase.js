import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import InitializeFirebase from "../Components/Firebase/firebase.initialization"

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState()
    InitializeFirebase();
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            
    }
    const logOutUser = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        signInWithGoogle,
        logOutUser,
        error,
    }
}
export default useFirebase;