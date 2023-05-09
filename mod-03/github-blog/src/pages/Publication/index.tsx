import { Link, useLocation } from "react-router-dom";
import { PublicationContainer, ReactMarkdownContent, SubHeader } from "./styles";
import { ArrowLeft, ArrowSquareOut, CalendarBlank, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IPublication {
    publication: {
        id: number;
        title: string;
        html_url: string;
        user: { login: string };
        created_at: string;
        comments: number;
        body: string;
    }
}

export function Publication() {

    const location = useLocation();

    const { publication }: IPublication = location.state;

    return (
        <PublicationContainer>
            <main>
                <header>
                    <SubHeader>
                        <Link to='/home'>
                            <ArrowLeft size={16} />
                            Voltar
                        </Link>

                        <a href={publication.html_url}>
                            Ver no github
                            <ArrowSquareOut size={16} />
                        </a>
                    </SubHeader>

                    <h2> {publication.title} </h2>

                    <div>
                        <span>
                            <GithubLogo weight="fill" />
                            {publication.user.login}
                        </span>

                        <span>
                            <CalendarBlank weight="fill" />
                            {formatDistanceToNow(new Date(publication.created_at), {
                                addSuffix: true,
                                locale: ptBR
                            })}
                        </span>

                        <span>
                            <ChatCircle weight="fill" />
                            {publication.comments} comentários
                        </span>
                    </div>
                </header>

                <ReactMarkdownContent>
                    { publication.body }
                </ReactMarkdownContent>

            </main>
        </PublicationContainer>
    );
}