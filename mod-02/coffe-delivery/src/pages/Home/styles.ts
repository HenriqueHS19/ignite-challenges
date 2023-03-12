import styled from "styled-components";
import backgroundHeroImg from '../../assets/hero-background.png';

export const HeroContainer = styled.div`
    max-width: 100%;
    background: url(${backgroundHeroImg});

    padding: 5.8rem 0;

    & > div {
        max-width: 70rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3.5rem;

        & > div {
            display: flex;
            flex-direction: column;

            h1 {
                font-family: 'Baloo 2';
                font-size: 3rem;
                font-weight: 800;
                line-height: 3.8rem;
                color: ${props => props.theme["brown-700"]};
            }

            h4 {
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 1.6rem;
                color: ${props => props.theme["brown-500"]};
                margin-top: 1rem;
            }
        }
    }
`;

export const Items = styled.div`
    width: 100%;
    margin-top: 4.3rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;

    & > p {
        color: ${props => props.theme["brown-300"]};

        display: flex;
        align-items: center;
        gap: 0.7rem;

        span {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background: ${props => props.theme["yellow-700"]};

            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                color: ${props => props.theme["white-100"]};
            }
        }
        &:nth-child(2n) {
            span {
                background: ${props => props.theme["brown-300"]};
            }
        }
        &:nth-child(3n) {
            span {
                background: ${props => props.theme["yellow-500"]};
            }
        }
        &:nth-child(4n) {
            span {
                background: ${props => props.theme["purple-500"]};
            }
        }
    }
`;

export const HomeContainer = styled.section`
    padding-bottom: 10rem;
`;

export const ListCoffe = styled.div`
    max-width: 100vw;

    & > h2 {
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme["brown-500"]};
        margin-top: 2rem;
    }

    & > div {
        margin-top: 3.3rem;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

`;



