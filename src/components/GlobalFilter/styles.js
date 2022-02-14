import styled from 'styled-components';


export const SeachInput = styled.input`
border: 0;
border-radius: 25px;
/* width: ${props => props.active ? 10 : 300}px; */
width: 300px;
height: 40px;
background-color: #FFF;
background-image: url('/assets/search.png');
background-size: 30px;
background-repeat: no-repeat;
background-position: 10px center;
outline: 0;
padding-left: 50px;
transition: all ease 0.3s;
/* cursor: pointer; */
font-size: 15px;

&:focus
 {
    cursor: text;
}
`;