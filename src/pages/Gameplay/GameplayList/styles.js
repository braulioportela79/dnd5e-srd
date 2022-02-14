import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0rem;
  overflow: auto;
  overflow-x: hidden;
  flex-grow: 1;
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
  

  @media(max-width: 1024px) and (min-width: 745px) {
    padding: 2rem 0rem;
  }

  @media(max-width: 744px)  {
    padding: 1rem 0rem;
  }

  @media(max-width: 400px)  {
    padding: 1rem 0rem;
  }

  /* // COLOR PALETTE 01
  color: #fbf5f3;
  background-color: #522b47; */

  // COLOR PALETTE 04
  color: #0b3948;
  background-color: #d0cdd7;
`;

export const ListingBody = styled.div`
    @media(max-width: 742px) {
        display: ${props => props.sidebarOpen ? 'none' : 'block'};
    }
`;

export const CardListing = styled.ul`
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin-block-end: 0;
    padding-inline-start: 0;

    @media(max-width: 922px) {
        justify-content: center;
    }
    `;


export const Loader = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;

`;