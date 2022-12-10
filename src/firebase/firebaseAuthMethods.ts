
import { auth } from "./configFirebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { IUserState } from "../interfaces";



// Create user with email and password
export const createUserEmailPassword = async ( email: string, password: string, name: string ): Promise<IUserState>=>{

    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);

        if (user){
            await updateProfile(user, { displayName: `${name}` })
            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
            }
        }else{
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


export const logInUserEmailPassword = async (email: string, password: string): Promise<IUserState>=>{

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        
        if (user){

            return {
                isLoggged: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
            }
        }else{
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