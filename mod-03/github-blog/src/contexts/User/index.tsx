import { ReactNode, createContext, useState } from "react";

interface IUser {
    id: number;
    avatar_url: string;
    name: string;
    bio: string | null;
    login: string;
    company: string | null;
    followers: number;
    html_url: string;
}

interface IUserContext {
    user?: IUser;
    handleSetUser: (user: IUser) => void;
}

interface IUserProvider {
    children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children } : IUserProvider) {
    const [ user, setUser ] = useState<IUser>();

    function handleSetUser(user: IUser) {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, handleSetUser }}>
            { children }
        </UserContext.Provider>
    )
}