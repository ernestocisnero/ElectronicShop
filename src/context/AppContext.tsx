import { createContext } from "react";
import { IUserState } from "../interfaces";
import { ActionType } from "./appReducer";

type UserContext = {
    userState: IUserState,
    dispatch: React.Dispatch<ActionType>,
}

export const AppContext = createContext<UserContext>({} as UserContext);