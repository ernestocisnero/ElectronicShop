

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