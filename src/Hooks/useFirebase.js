import initializeAuthentication from "../FirebaseSetup/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState([]);

    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const logOut = () => {
        signOut(auth).then(() => { setUser([]) }).catch(e => console.log(e.message))

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return { user, setUser, googleSignin, logOut };

}
export default useFirebase;