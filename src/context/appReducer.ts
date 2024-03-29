import { IProductCart, IUserState } from "../interfaces";


export type ActionType =
    | { type: 'log_user', payload: IUserState }
    | { type: 'logOut_user', payload: IUserState }
    | { type: 'addToCart', payload: IProductCart[] }
    | { type: 'removeFromCart', payload: IProductCart[] }
    | { type: 'updateNumberOfProduct', payload:IProductCart[] }
    | { type: 'filterByProduct', payload:string | undefined }


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
            state.userCart = action.payload;
            return {
                ...state,
            }

        case 'updateNumberOfProduct':
            state.userCart = action.payload;
        return {
            ...state
        }

        case 'filterByProduct':
            state.filter = action.payload;
        return {
            ...state
        }


        default:
            return state;
    }
}