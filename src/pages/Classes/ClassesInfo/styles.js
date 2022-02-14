import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    width: auto;
    margin: 0 auto;
    position: relative;
    perspective: none;
    transform: none;
    overflow: auto;
    overflow-x: hidden;
    flex-grow: 1;
    color: #0b3948;
    background-color: #e8f4f8;

            /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

    /* @media(max-width: 1024px) {
        padding: 2rem 1rem;
    }
    @media(max-width: 860px) {
        padding: 2rem 0rem;
        margin: 0;
    }
    @media(max-width: 435px) {
        text-align: left;
    } */
`;

export const Content = styled.div`
    width: auto;
    box-shadow: none;
    /* padding: 15px 10px; */
    display: flex;
    background: 0;
    z-index: auto;
    position: relative;

    @media(max-width: 742px) {
        display: ${props => props.sidebarOpen ? 'none' : 'block'};
    }
`;

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;