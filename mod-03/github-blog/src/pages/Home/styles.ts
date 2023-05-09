import styled from "styled-components";

export const HomeContainer = styled.section`
    width: 100%;

    main {
        width: 100%;
        max-width: 52.6rem;
        padding: 1rem;
        padding-bottom: 14.6rem;
        margin: 0 auto;
    }
`;

export const PublicationList = styled.div`
    max-width: 100%;
    margin-top: 3rem;

    display: grid;
    grid-template-columns: repeat(2, calc((52.6rem / 2) - 2rem));
    gap: 2rem;
`;