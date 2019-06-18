import styled from 'styled-components';
export const ButtonContainer = styled.button `
    background: transparent;
    color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    border-radius: 0.5rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    padding: 0.2rem 0.5rem;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainWhite);
    }
    &:focus {
        outline: none;
    }
`;