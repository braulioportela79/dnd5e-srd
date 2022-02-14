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


export const Content = styled.div`
justify-content: center;
padding-top: 20px;

columns: 3;
font-size: 15px;
text-align: left;
margin-top: 3rem;
border-radius: 15px;
padding-left: 2rem;

margin-bottom: 3rem;

@media (max-width: 665px) {
    padding-left: 0.5rem;
    

}

@media (max-width: 600px) {
    columns: 1;
}

  a{
    text-decoration: none;
    color: #416165;
    padding: 2px;
    &:hover{
      background: #acb0bd;
      padding: 2px;
    }
  }

  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  ul{
    margin-bottom: 30px;
    break-inside: avoid-column;
    margin-block-start: 0;
    
  }
  h3{
    margin-bottom: 20px;
    color: #0b3948;
    font-size: 20px;
    margin-block-start: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content:center;
  font-size: 2rem;
  font-weight: 700;
  color: #0b3948;
  margin-bottom: 2rem;

`;


export const Loader = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;

`;
