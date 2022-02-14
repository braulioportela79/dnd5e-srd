import styled from 'styled-components';

export const Container = styled.div`
    text-align: justify;
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

export const Title = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: #a82315;
    margin-bottom: 2rem;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(to right,#0d0d0d, #c20000, #c20000,  #0d0d0d);
    border-image-slice: 1;

    @media (max-width: 750px) {
        font-size: 2rem;
        margin-bottom: 1rem;
    border-bottom: 2px solid transparent;
    }
`;



export const Loader = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
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

    p{
        span {
            font-weight: bold;
        }
    }
`;

