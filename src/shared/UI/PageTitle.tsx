import styled from 'styled-components';

export const PageTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    line-height: 1.25;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: ${props => props.color ?? 'white'};

    @media (max-width: 1199px) {
        padding-top: 1rem;
    }
`;