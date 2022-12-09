
import { auth } from "./configFirebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { IUserState } from "../interfaces";



// Create user with email and password
export const createUserEmailPassword = async ( email: string, password: string ): Promise<IUserState>=>{

    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        

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
}
catch (error) {
        console.log(error);
        
        return {
            isLoggged: false,
            uid: null,
            displayName: null,
            email: null
        }
        
    }

}