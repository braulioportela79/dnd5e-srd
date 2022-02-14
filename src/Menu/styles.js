import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.sidebarOpen ? '25%' : '10%'};
    border-right: 1px solid  #16195C;
    background-color: #2a2a72;
    /* background-image: linear-gradient(315deg, #009ffd  0%, #2a2a72 74%); */
    position: relative;
    transition: .2s ease-in all;
`;

export const MenuArea = styled.div`
overflow: auto;
`;

export const MenuItemContainer = styled.div`
overflow: auto;`;

export const MenuItem = styled.div`
    ${props => !props.sidebarOpen && `
        text-align: center;
        ${props.selected && 'background-color: yellow'};
    `}
    padding: 6px 20px;
    font-weight: 600;
    color: ${props => props.selected ? 'red' : 'green'};
    white-space: nowrap;
    position: relative;

    &:hover {
        color: red;
        transition: .2s ease all;
    }

    &:after {
        content: '';
        border: 1px solid ${props => props.selected ? 'red' : 'green'};
        display: block;
        margin: 8px 0 4px;
    }

    ${props => !props.selected && `
        &:hover {
            &:after {
                border: 1px solid rgba(255, 0, 0, 0.2);
                transition: .2s ease all;
            }
        }
    `}
`;

export const SubmenuItem = styled.div``;

export const SubmenuItemContainer = styled.div`

`;

export const Text = styled.p`
    display: ${props => props.sidebarOpen ? 'inline' : 'none'};
`;

export const Icon = styled.img`
    ${props => props.sidebarOpen && 'padding-right: 20px; transition: .2s ease-in padding-right'};
    height: 16px;
`;

export const DropdownIcon = styled.span`
    position: absolute;
    top: ${p => p.isOpen ? '16px' : '12px'};
    right: 24px;
    border: solid ${props => props.selected ? 'red' : 'green'};
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;

export const TogglerContainer = styled.div`
    
    /* position: absolute; */
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 20px auto;
`;

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: .25em;
            height: .1em;
            width: 100%;
            background: #fff;
            box-shadow: 
                0 .75em 0 0 #fff,
                0 1.5em 0 0 #fff;
        }
`;