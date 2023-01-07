import { IProductCart, IUserState } from "../interfaces";


export type ActionType =
    | { type: 'log_user', payload: IUserState }
    | { type: 'logOut_user', payload: IUserState }
    | { type: 'addToCart', payload: IProductCart[] }
    | { type: 'removeFromCart', payload: IProductCart[] }
    | { type: 'increaseNumberOfProduct', payload: number }
    | { type: 'decreaseNumberOfProduct', payload: number }


export const appReducer = (state: IUserState, action: ActionType): IUserState => {

    switch (action.type) {

        case 'log_user':
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.isLoggged = action.payload.isLoggged;
            state.uid = action.payload.uid;
            state.userPhotoURL = action.payload.userPhotoURL
            state.userCart = action.payload.userCart
            return {
                ...state,
            }

        case 'logOut_user':
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.isLoggged = action.payload.isLoggged;
            state.uid = action.payload.uid;
            state.userCart = action.payload.userCart
            return {
                ...state,
            }

        case 'addToCart':
            state.userCart = action.payload;
            return {
                ...state,
            }

        case 'removeFromCart':
            console.log('Remove from action triggered');
            state.userCart = action.payload;
            return {
                ...state,
            }

        case 'increaseNumberOfProduct':

        return {
            ...state
        }

        case 'decreaseNumberOfProduct':

        return{
            ...state
        }

        default:
            return state;
    }
}