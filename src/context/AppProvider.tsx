import { useReducer } from 'react';
import { IUserState, IPropsProvider } from '../interfaces';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';

const INITIAL_STATE: IUserState = {
    uid: null,
    displayName: null,
    email: null,
    isLoggged: false,
    userCart: [],
    filter: 'None'
}


export const AppProvider = ({ children }: IPropsProvider) => {

    const [userState, dispatch] = useReducer(appReducer, INITIAL_STATE);

    return (
        <AppContext.Provider value={{ userState, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
