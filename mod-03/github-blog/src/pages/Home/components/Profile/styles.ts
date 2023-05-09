import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 13.2rem;
    background: ${props => props.theme["dark-blue-700"]};
    border-radius: 10px;
    padding: 2rem 2.5rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        width: 9.3rem;
        height: 9.3rem;
        border-radius: 8px;
    }

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        header {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            strong {
                font-size: 1.5rem;
                font-weight: 700;
            }

            a {
                font-size: 0.7rem;
                text-transform: uppercase;
                text-decoration: none;
                color: ${props => props.theme["blue-500"]};

                padding-bottom: 0.3rem;
                border-bottom: 1px solid transparent;

                display: flex;
                align-items: center;
                gap: 0.5rem;

                cursor: pointer;

                &:hover {
                    border-color: ${props => props.theme["blue-500"]};
                }
            }
        }

        p {
            color: ${props => props.theme["gray-200"]};
            line-height: 1.5rem;
        }

        span {
            width: 100%;
            margin-top: 1.5rem;

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.5rem;

            p {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }
`;