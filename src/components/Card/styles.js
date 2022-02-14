import styled from 'styled-components';

export const ListingCard = styled.li`
    width: 45%;
    padding-right: 10px;
    font-size: 16px;
    list-style: none;

    @media(max-width: 922px) {
        width: 85%;
    }
`;

export const ListingCardContent = styled.div`
    height: 342px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #acb0bd;
    background: #EBE9E7;
    padding: 15px 15px 35px;
    margin-bottom: 60px;
    background-image: url(../images/card-paper-texture.png);
    background-repeat: no-repeat;
    background-size: cover;

    @media(max-width: 922px) {
        height: auto;
    }
`;

export const ListingCardLink = styled.a`
    text-decoration: none;
    width: 100%;
`;

export const ListingCardBg = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: top right;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 1;
`;

export const ListingCardBody = styled.div`
    position: absolute;
    left: 15px;
    right: 126px;
    margin-right: 0;
    z-index: 2;
    height: auto;
    /* max-height: 350px; */
    overflow: hidden;
    padding: 8px;
    border: 1px solid #d0cdd7;
    box-shadow: -2px -1px 2px 0 #e0dcdc;
    background: rgba(250,250,250,0.9);

    span {
        p {
            margin-bottom: -10px;
            font-size: 13px;

            :last-child {
                margin-bottom: 0px;
            }
        }
    }

    

    @media(max-width: 922px) {
         position: relative;
         margin-right: 110px;
    }

    @media(max-width: 530px) {
         position: relative;
         margin-right: 0px;
         left: 1px;
         
    }
`;

export const ListingCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    position: relative;
    /* padding-left: 60px; */
    /* padding-top: 40px; */

    @media(max-width: 530px) {
padding-top: 50px;
         
    }
`;

export const ListingCardIcon = styled.img`


/* background-image: url(${props => props.src}); */
    /* background-repeat: no-repeat; */
    /* background-position: top right; */
    /* width: 100%; */
    /* height: 100%; */
    position: absolute;
    /* bottom: 0; */
    /* right: 0; */
    /* opacity: 1; */
    display:none;
    margin-top: 2px;
    margin-left: 2px;
    border: 1px solid #e0dcdc;
    border-radius: 4px;
    height: 50px;
    margin-right: 10px;

    @media(max-width: 530px) {
         display: block;
    }
`;


export const ListingCardHeaderPrimary = styled.div`
    flex: 1;
    border-bottom: 2px solid #acb0bd;
    /* padding-top: 50px; */
    /* padding-left: 20px; */
`;

export const ListingCardTitle = styled.h3`
    font-size: 25px;
    color: #242527;
    margin-bottom: 0;
    
    

    @media(max-width: 530px) {
         margin-block-start: 0;
         
    }
`;

export const ListingCardSource = styled.div`
    color: #979AA4;
    font-size: 12px;
    margin-bottom: 5px;
`;

export const ListingCardDescription = styled.div`
    font-size: 14px;
    color: #242527;
    line-height: 1.5;
`;

export const CharactersStatBlock = styled.p`
    margin-bottom: 0;
`;

export const ListingCardCallout = styled.div`
    position: absolute;
    bottom: -20px;
    z-index: 9;
    left: 50%;
    transform: translateX(-50%);
`;

export const ListingCardCalloutButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: #acb0bd;
    color: white;
    border-radius: 4px;
    font-family: "Roboto Condensed",Roboto,Helvetica,sans-serif;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    width: 220px;
    padding: 0 20px;
    text-align: center;

    :hover{
        background: #bfb9cc;
        transition: .1s ease-in all;
    }

    @media(max-width: 370px) {
        width: 100px;
        height: 50px;
    }
`;