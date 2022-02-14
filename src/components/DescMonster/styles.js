import styled from 'styled-components';

export const Container = styled.div`
    background-image: url('/assets/monsters/monsters-bg.png');
    background-size:contain;
    background-repeat: no-repeat;
`;


export const ContentContainer = styled.div`
    font-size: 16px;

    table {
        border-top: 0.5rem solid #acb0bd;
        border-bottom: 0.5rem solid #acb0bd;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    table thead {
        border-bottom: 1px solid #acb0bd;
    }

    table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
    }

    table tr {
        padding: .35em;
        
    }
    table th,
    table td {
        padding: .1em;
        text-align: center;
    }

    table th {
        font-size: .85em;
        text-transform: uppercase;
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

    @media(max-width: 890px) {
        background: #d0cdd7;
        height: 100vh;
    }
`;

export const ContentHeader = styled.div`
padding-top: 100px;
    display: flex;
    justify-content: center;
    
    @media(max-width: 1024px) {
        align-items: center;
    }
    @media(max-width: 890px) {

        flex-direction:column-reverse;
        align-items: center;
        background: #d0cdd7;
        
    }

    img {
        max-height:250px;
    }

    @media(max-width: 1024px) {
        img {
            width: 100%;
            max-width: 250px;
            max-height: fit-content;
        }
    }
`;


export const PrimaryContent = styled.section`
    padding: 4rem 4rem;

    @media(max-width: 1024px) {
        padding: 2rem 4rem;
    }
    @media(max-width: 890px) {
        background: #d0cdd7;
        padding: 2rem 1rem;
        /* height: 100vh; */
    }

    @media(max-width: 435px) {
        text-align: left;
    }


    hr {
        margin-top: 1rem;
        border-bottom: 5px solid;
        
        
        margin-bottom: 1rem;
    }
`;

export const RaceDetails = styled.h1`
    font-size: 36px;
    font-weight: normal;
    margin: 0 0 0.2em;
    letter-spacing: 0;
    word-wrap: break-word;

    span {
        font-size: 20px;
        margin-left: 10px;
        color: #979AA4;
    }
`;

export const AbilitiesContainer = styled.div`
display: flex;
`;

export const Ability = styled.div`
margin-left: 20px;
align-items: center;
display: flex;
flex-direction: column;
`;

export const AbilityName = styled.div``;

export const AbilityScore = styled.div``;