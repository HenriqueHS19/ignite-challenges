import { Link, useNavigate } from "react-router-dom";
import { CardPublicationContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ICardPublication {
    publication: {
        id: number;
        title: string;
        body: string;
        html_url: string;
        created_at: string;
    }
}

export function CardPublication({ publication }: ICardPublication) {
    return (
        <CardPublicationContainer>
            {/* Pass object in route */}
            <Link to='/publication' state={{ publication }}>
                <header>
                    <h1> {publication.title} </h1>
                    <span>
                        {formatDistanceToNow(new Date(publication.created_at), {
                            addSuffix: true,
                            locale: ptBR
                        })}
                    </span>
                </header>

                <p>
                    {publication.body}
                </p>
            </Link>
        </CardPublicationContainer>
    );
}