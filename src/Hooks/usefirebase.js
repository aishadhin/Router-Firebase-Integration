import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState('')

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => {
                console.log(error)
            });
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

                console.log('signout')
            }).catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
        });
    },[auth])

    return { signInWithGoogle, user, handleSignOut }
}

export default useFirebase;