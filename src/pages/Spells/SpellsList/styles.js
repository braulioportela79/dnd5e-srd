import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
display: flex;
  /* padding: 2rem 0rem; */
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

@media(max-width: 742px) {
        display: ${props => props.sidebarOpen ? 'none' : 'block'};
    }
    justify-content: center;
    padding-top: 20px;
    color: #0b3948;
    font-size: 15px;
    text-align: left;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    width: 90%;

a{
    text-decoration: none;
    color: #0b3948;
    padding: 2px;
    font-weight: bold;
    &:hover{
      background: #fff;
      padding: 2px;
    }
  }

  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  ul{
    padding-bottom: 30px;
    break-inside: avoid-column;
  }
  h3{
    margin-bottom: 20px;
    color: #a82315;
    font-size: 20px;
  }

  table {
        font-size: 15px;
        border-collapse: collapse;
        border-top: 0.5rem solid #acb0bd;
        border-bottom: 0.5rem solid #acb0bd;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        
    }

    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
        border-bottom: 0.5rem solid #d4d4d4;

        @media (max-width: 975px) {
            margin: auto;
    
}
    }

    table thead {
      border-bottom: 1px solid #acb0bd;


    }

    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }

    table td,
    table th {
        padding: 0.5rem;
        text-align: left;
        @media (max-width: 975px) {
            padding: 0;
            table-layout: fixed;
        }
    }

    th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
        text-align: -internal-center;
        table-layout: fixed;
        width: 2px;
        

        span {
          margin: 20px;
          

        }
    }

    @media screen and (max-width: 890px) {
        table {
            border: 0;
            width: 100%;
        }

    table caption {
        font-size: 1.3em;
    }
  
    table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;

   }
  
    table tr {
        border-bottom: 3px solid #acb0bd;
        display: block;
        margin-bottom: .625em;
    }
  
    table td {
        border-bottom: 1px solid #acb0bd;
        display: block;
        font-size: .8em;
        text-align: right;
    }
  
    table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }
  
    table td:last-child {
        border-bottom: 0;
    }
}

    
`;

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;

`;
export const Title = styled.div`
  display: flex;
  justify-content:center;
  font-size: 2rem;
  font-weight: 700;
  color: #0b3948;
  margin-bottom: 2rem;

`;

export const Header = styled.div`

display: flex;
justify-content: center;   
`;