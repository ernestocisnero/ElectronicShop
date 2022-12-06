import { ISignUpResponse } from "../interfaces";

// Create user with email and password
export const createUserEmailPassword = ( email: string, password: string ): ISignUpResponse=>{
    return {
        res: {
            ok: false
        }
    }
}