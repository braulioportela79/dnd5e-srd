import styled from 'styled-components';

export const Container = styled.div`

  padding: 2rem 5rem;
  overflow: auto;
  flex-grow: 1;
  text-align: justify;

  @media(max-width: 1024px) and (min-width: 745px) {
    padding: 2rem 3rem;
  }

  @media(max-width: 744px)  {
    padding: 1rem 2rem;
  }

  @media(max-width: 400px)  {
    padding: 1rem 1rem;
  }

  /* // COLOR PALETTE 01
  color: #fbf5f3;
  background-color: #522b47; */

  // COLOR PALETTE 04
  color: #0b3948;
  background-color: #d0cdd7;

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
`;



