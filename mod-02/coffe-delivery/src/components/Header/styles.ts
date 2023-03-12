import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 100%;

    header {
        max-width: 70rem;
        margin: 0 auto;
        padding: 2rem 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            display: flex;
            align-items: center;
            gap: 0.7rem;

            span {
                background: ${props => props.theme["purple-100"]};
                border-radius: 6px;
                padding: 0.5rem;

                font-size: 0.8rem;
                color: ${props => props.theme["purple-700"]};

                display: flex;
                align-items: center;
                gap: 0.2rem;
            }

            a {
                background: ${props => props.theme["yellow-100"]};
                border-radius: 6px;
                padding: 0.5rem;
                position: relative;

                color: ${props => props.theme["yellow-700"]};

                display: flex;
                align-items: center;
                justify-content: center;

                span {
                    display: none;
                }
            }

            a.cartWithProduct {
                span {
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                    background: ${props => props.theme["yellow-700"]};

                    font-weight: 700;
                    font-size: 0.8rem;
                    color: ${props => props.theme["white-100"]};

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    position: absolute;
                    top: -5px;
                    right: -5px;
                }
            }
        }
    }
`;