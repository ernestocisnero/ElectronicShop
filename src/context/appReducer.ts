import { IProductCart, IUserState } from "../interfaces";

export type ActionType =
    | { type: 'log_user', payload: IUserState }
    | { type: 'addToCart', payload: IProductCart }
    | { type: 'removeFromCart', payload: IProductCart }


export const appReducer = (state: IUserState, action: ActionType): IUserState => {

    switch (action.type) {

        case 'log_user':
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.isLoggged = action.payload.isLoggged;
            state.uid = action.payload.uid;
            return {
                ...state,
            }

        case 'addToCart':
            console.log('Add to cart action triggered');
            // state.userCart = action.payload
            return {
                ...state,
            }

        case 'removeFromCart':
            console.log('Remove from action triggered');
            return {
                ...state,
            }

        default:
            return state;
    }
}