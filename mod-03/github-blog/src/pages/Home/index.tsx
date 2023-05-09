import { Profile } from "./components/Profile";
import { CardPublication } from "./components/CardPublication";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PublicationList } from "./styles";
import { useContext } from "react";
import { PublicationContenxt } from "../../contexts/Publication";

export function Home() {

    const { publications } = useContext(PublicationContenxt);

    return (
        <HomeContainer>
            <main>
                <Profile />
            
                <SearchForm />

                <PublicationList>
                    {publications.map(publication => {
                        return (
                            <CardPublication publication={publication} key={publication.id} />
                        );
                    })}
                </PublicationList>
            </main>
        </HomeContainer>
    );  
}