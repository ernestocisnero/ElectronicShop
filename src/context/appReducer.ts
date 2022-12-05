import { IProductCart, IUserState } from "../interfaces";

export type ActionType =
    | { type: 'log_user' }
    | { type: 'addToCart', payload: IProductCart }
    | { type: 'removeFromCart', payload: IProductCart }


export const appReducer = (state: IUserState, action: ActionType): IUserState => {

    switch (action.type) {

        case 'log_user':
            console.log('Log User action triggered');
            
            return {
                ...state,
            }

        case 'addToCart':
            console.log('Add to cart action triggered');
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