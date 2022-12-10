
import { auth } from "./configFirebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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