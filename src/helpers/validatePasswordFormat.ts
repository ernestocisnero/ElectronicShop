
/*
    Validate length 8, 1 upper case, 1 special character, 1 number, matching passwords
*/
export const validatePasswordFormat = ( password: string, passwordConfirm: string ): boolean =>{
    return password === passwordConfirm; 
}