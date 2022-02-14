import styled from 'styled-components';

export const Container = styled.div`
    padding: ${props=> props.sidebarOpen ? '25px 10px' : '25px 5px'};
    transition: .1s ease-in all;

    img {
        width: ${props=> props.sidebarOpen ? '200px' : '50px'};
    }
`;