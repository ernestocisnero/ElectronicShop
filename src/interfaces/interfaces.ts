

export interface IPropsProvider {
    children: JSX.Element | JSX.Element[]
}

export interface IProductCart {
    productId: string,
    quantity?: number,

}


export interface IUserState {
    userId: string,
    isLogin: boolean,
    userCart: IProductCart[]
}


//Firebase

export interface IFirebaseConfig{
    apiKey:string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

export interface ISignUpResponse{
    res: {
        ok: boolean
    },

    error?:{
        errorCode: number,
        errorMessage: string
    }
}