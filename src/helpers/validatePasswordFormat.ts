import { ReactNativeAsyncStorage } from "firebase/auth";

/*
    Validate length 8, 1 upper case, 1 special character, 1 number, matching passwords
*/
export const validatePasswordFormat = ( {currentTarget}: React.FormEvent<HTMLInputElement> ): number =>{
    let strongness: number = 0;

    if( currentTarget.value.length > 8 ) strongness += 20;
    if( currentTarget.value.toLowerCase() !== currentTarget.value ) strongness += 20;
    if( currentTarget.value.toUpperCase() !== currentTarget.value ) strongness += 20;
    if( /\d/.test(currentTarget.value) ) strongness += 20;
    if( /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(currentTarget.value) ) strongness += 20;
    
    return strongness;
}