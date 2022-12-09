

export interface IPropsProvider {
    children: JSX.Element | JSX.Element[]
}

export interface IProductCart {
    productId: string,
    quantity?: number,
}


export interface IUserState {
    uid: string | null,
    displayName: string | null,
    email: string | null,
    isLoggged: boolean,
    userCart?: IProductCart[]
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