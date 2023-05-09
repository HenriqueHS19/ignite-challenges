import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../../libs/api";
import { UserContext } from "../User";

interface IPublicationProvider {
    children: ReactNode;
}

interface IPublication {
    id: number;
    title: string;
    body: string;
    html_url: string;
    created_at: string;
}

interface IPublicationContext {
    publications: IPublication[];
    totalItems: number;
    searchPublication: (query: string) => void;
}

export const PublicationContenxt = createContext({} as IPublicationContext);

export function PublicationContextProvider({ children }: IPublicationProvider) {
    const [publications, setPublications] = useState<IPublication[]>([]);
    let [totalItems, setTotalItems] = useState(0);

    const { user } = useContext(UserContext);

    async function searchPublication(query: string) {
        const response = await api.get(`/search/issues?q=${query}%20user:${user?.login}`);
        
        setPublications(response.data.items);
        setTotalItems(response.data.total_count);
    }

    return (
        <PublicationContenxt.Provider value={{ publications, searchPublication, totalItems }}>
            { children }
        </PublicationContenxt.Provider>
    );
}