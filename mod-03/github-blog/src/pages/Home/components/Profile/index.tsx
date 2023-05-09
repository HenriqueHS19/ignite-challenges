import { useContext, useEffect, useState } from "react";
import { ProfileContainer } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { UserContext } from "../../../../contexts/User";

export function Profile() {

    const { user } = useContext(UserContext);

    return (
        <ProfileContainer>
            <img src={user?.avatar_url} alt="" />

            <div>
                <header>
                    <strong> {user?.name} </strong>

                    <a href={user?.html_url}>
                        github
                        <ArrowSquareOut size={16} />
                    </a>
                </header>

                <p> {user?.bio} </p>

                <span>
                    <p>
                        <GithubLogo weight="fill" />
                        {user?.login}
                    </p>

                    { user?.company && 
                        <p>
                            <Buildings weight="fill" />
                            { user.company }
                        </p>
                    }

                    <p>
                        <Users weight="fill" />
                        {new Intl.NumberFormat().format(Number(user?.followers))} seguidores
                    </p>
                </span>
            </div>
        </ProfileContainer>
    );
}