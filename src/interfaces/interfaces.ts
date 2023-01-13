

export interface IPropsProvider {
    children: JSX.Element | JSX.Element[]
}

export interface IProductCart {
    productID: string,
    count: number
}


export interface IUserState {
    uid: string | null,
    displayName: string | null,
    email: string | null,
    isLoggged: boolean,
    userPhotoURL?: string | null,
    userCart: IProductCart[] | null
    filter?: string

}


//Firebase

export interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

// Forms

export interface IFormSignUpInput {
    name: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export interface IFormLoginInput {
    email: string;
    password: string;
}

//Product

export interface IProduct {
    category: string,
    description: string,
    manufacturer: string,
    price: number,
    type: string
}