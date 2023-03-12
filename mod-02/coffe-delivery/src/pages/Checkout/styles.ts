import styled from "styled-components";

export const CheckoutContainer = styled.section`
    margin-top: 2.5rem;

    form {
        width: 100%;

        display: flex;
        align-items: flex-start;
        gap: 2rem;
    }
`;

export const Box = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-family: 'Baloo 2';
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme["brown-500"]};
    }
`;

export const ContentBase = styled.div`
    width: 100%;
    background: ${props => props.theme["gray-100"]};
    border-radius: 6px;

    padding: 2.5rem;
    
    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
        width: 100%;

        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        svg {
            color: ${props => props.theme["yellow-700"]};
        }

        span {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            
            h3 {
                font-size: 1rem;
                font-weight: 400;
                color: ${props => props.theme["brown-500"]};
            }

            p {
                font-size: 0.8rem;
                color: ${props => props.theme["brown-300"]};
            }
        }
    }
`;