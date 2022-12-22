
import { auth, googleProvider, twitterProvider } from "./configFirebase";

import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { IUserState } from "../interfaces";
import { readFirestoreDB } from "./firestore/readFirestoreDB";



// Create user with email and password
export const createUserEmailPassword = async (email: string, password: string, name: string): Promise<IUserState> => {

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const user_cart = await  readFirestoreDB(`${user.uid}`);

        if (user) {
            await updateProfile(user, { displayName: `${name}` })
            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                userCart: user_cart
            }
        } else {
            return {
                isLoggged: false,
                uid: null,
                displayName: null,
                email: null
            }
        }
    }
    catch (error) {
        console.error(error);
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null
        }

    }
}


export const logInUserEmailPassword = async (email: string, password: string): Promise<IUserState> => {

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const user_cart = await  readFirestoreDB(`${user.uid}`);

        if (user) {

            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                userCart: user_cart
            }
        } else {
            return {
                isLoggged: false,
                uid: null,
                displayName: null,
                email: null
            }
        }

    } catch (error) {
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null
        }

    }

}

export const googleSignIn = async (): Promise<IUserState> => {

    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        const user_cart = await  readFirestoreDB(`${user.uid}`);

        if (user) {

            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                userPhotoURL: user.photoURL,
                userCart: user_cart
            }
        } else {
            return {
                isLoggged: false,
                uid: null,
                displayName: null,
                email: null
            }
        }
    } catch (error) {
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null
        }
    }
}

export const twitterSignIn = async (): Promise<IUserState> => {

    try {
        const { user } = await signInWithPopup(auth, twitterProvider);
        const user_cart = await  readFirestoreDB(`${user.uid}`);

        if (user) {

            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                userCart: user_cart
            }
        } else {
            return {
                isLoggged: false,
                uid: null,
                displayName: null,
                email: null
            }
        }
    } catch (error) {
        console.log(error)
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null
        }
    }

}

export const signOutUser = async (): Promise<IUserState> =>{

    try {
        await signOut(auth);

        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null,
            userCart: []
        }
        
    } catch (error) {
        console.log(error);
        
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null,
            userCart: []
        }
    }
}

