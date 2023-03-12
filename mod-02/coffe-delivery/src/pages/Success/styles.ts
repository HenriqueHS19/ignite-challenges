import styled from "styled-components";

export const SuccessContainer = styled.section`
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 5rem;

    display: flex;
    align-items: center;
    gap: 6.2rem;

    div {
        display: flex;
        flex-direction: column;
        
        h1 {
            font-family: 'Baloo 2';
            font-size: 2rem;
            font-weight: 800;
            color: ${props => props.theme["yellow-700"]};
        }

        p {
            font-size: 1.2rem;
            color: ${props => props.theme["brown-500"]};
            margin-top: 0.2rem;
        }

        ul {
            flex: 1;
            list-style: none;
            padding: 2.8rem 2.5rem;
            border: 1px solid;
            border-image: liner;
            border-radius: 6px 36px;
            margin-top: 2.8rem;

            display: flex;
            flex-direction: column;
            gap: 2rem;

            li {
                flex: 1;
                
                display: flex;
                align-items: center;
                gap: 0.8rem;

                span {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background: ${props => props.theme["purple-500"]};

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        color: ${props => props.theme["white-100"]};
                    }
                }
                &:nth-child(2) > span {
                    background: ${props => props.theme["yellow-500"]};
                }
                &:nth-child(3) > span {
                    background: ${props => props.theme["yellow-700"]};
                }

                p {
                    max-width: 90%;
                    font-size: 1rem;
                }
            }
        }
    }
`;