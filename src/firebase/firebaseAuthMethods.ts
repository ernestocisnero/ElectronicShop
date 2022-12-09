import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./configFirebase";


// Create user with email and password
export const createUserEmailPassword = async ( email: string, password: string ): Promise<void>=>{

    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);

        
            const res = {
                ok: true,
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
            }
        

    } catch (error) {
        console.log(error);
        
            const res = {
                ok: false,
                uid: null,
                displayName: null,
                email: null
            }
        
    }

}