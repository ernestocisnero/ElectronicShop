import { useReducer } from 'react';
import { IUserState, IPropsProvider } from '../interfaces';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';

const INITIAL_STATE: IUserState = {
    userId: '',
    isLogin: false,
    userCart: []
} 


export const AppProvider = ( { children }: IPropsProvider ) => {

    const [userState, dispatch] = useReducer(appReducer, INITIAL_STATE);

    return (
        <AppContext.Provider value={ {userState, dispatch} }>
            { children }
        </AppContext.Provider>
    )
}
