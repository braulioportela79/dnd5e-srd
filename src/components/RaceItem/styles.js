import styled from 'styled-components';

export const Container = styled.div`
    background-image: url(${props => props.src});
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
        table-layout: fixed;
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
        padding: .625em;
    }

    table th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
    }

    @media screen and (max-width: 600px) {
        table {
            border: 0;
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

export const ContentHeader = styled.div`
padding-top: 50px;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
        max-width:330px;
    }

    @media(max-width: 1024px) {
        align-items: center;
    }
    @media(max-width: 890px) {

        flex-direction:column-reverse;
        align-items: center;
        background: #d0cdd7;
    }
`;

export const ContentImage = styled.div`
    max-width: 330px;

    @media(max-width: 1024px) {
        img {
            width: 100%;
        }
    }
`;

export const Blockquote = styled.blockquote`
    padding: 20px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    line-height: 1.6em;
    font-size: 13px;
    width: 30%;
    background: rgba(255,255,255,0.5);

    p {
        line-height: 1.15em;
        margin: 0 0 6px;
    }

    @media(max-width: 890px) {
        width: auto;
    }

    @media(max-width: 890px) {
        background: #d0cdd7;
        border-left: 2px solid #e0dcdc;
        border-right: 2px solid #e0dcdc;
        margin-inline-start: 5px;
        margin-inline-end: 5px;
        padding: 10px;
    }
`;

export const BlockquoteFooter = styled.em`
    text-align: right;
`;


export const PrimaryContent = styled.section`
    padding: 2rem 4rem;

    @media(max-width: 1024px) {
        padding: 2rem 4rem;
    }
    @media(max-width: 890px) {
        background: #d0cdd7;
        padding: 2rem 1rem;
    }

    @media(max-width: 435px) {
        text-align: left;
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




