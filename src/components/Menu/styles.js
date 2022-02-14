import styled from 'styled-components';

export const Container = styled.div`

  /* // COLOR PALETTE 01
  background: #7b0828; */

  // COLOR PALETTE 04
  background: #acb0bd;
  /* background: #7b0828; */
  /* background: linear-gradient(90deg, hsla(197, 14%, 57%, 1) 0%, hsla(226, 11%, 71%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(197, 14%, 57%, 1) 0%, hsla(226, 11%, 71%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(197, 14%, 57%, 1) 0%, hsla(226, 11%, 71%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#8399a2", endColorstr="#acb0bd", GradientType=1 ); */

  min-width: ${props => props.sidebarOpen ? '220px' : '60px'};
  /* width: ${props => props.sidebarOpen ? '220px' : '60px'}; */
  transition: .2s ease-in all;
  display: flex;
  flex-direction: column;
`;

export const MenuItemContainer = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MenuArea = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;

  a {
      text-decoration: none;
    }

  .active {
    li{

      /* // COLOR PALETTE 01
      color: #acb0bd;      */

      // COLOR PALETTE 04
      color: #0b3948;
      
      font-weight: 700;

      /* // COLOR PALETTE 01
      ${props => !props.sidebarOpen && `
        background-color: #0f0e0e;
      `} */

      // COLOR PALETTE 04
      ${props => !props.sidebarOpen && `
        background-color: #0b3948;
      `}
        &:after {
          /* // COLOR PALETTE 01
          border: 1px solid ${props => props.sidebarOpen ? '#acb0bd' : '#acb0bd'}; */
          
          // COLOR PALETTE 04
          border: 1px solid ${props => props.sidebarOpen ? '#0b3948' : '#acb0bd'};

          transition: .1s ease-in all;
        }

    }
  }
`;

export const MenuItem = styled.li`
    ${props => !props.sidebarOpen && `
        text-align: center;
        
    `}
    padding: ${props => props.sidebarOpen ? '4px 13px' : '5px 18px'};
    font-weight: 600;
    white-space: nowrap;
    transition: .2s ease-in all;

    /* // COLOR PALETTE 01
    color: #fbf5f3;     */

    // COLOR PALETTE 04
    color: #416165;

    &:hover {
      /* // COLOR PALETTE 01
      color: #acb0bd;       */

      // COLOR PALETTE 04
      color: #d0cdd7;

      transition: .2s ease all;
    }

    &:after {

      /* // COLOR PALETTE 01
      border: 1px solid #fbf5f3; */

      // COLOR PALETTE 04
      border: 1px solid #416165;

      content: '';
      display: block;
      margin: ${props => props.sidebarOpen ? '8px 0 0 0' : '0 0 0 0'} ;
    }
    
    &:hover {
      &:after {
        /* // COLOR PALETTE 01
        border: 1px solid rgba(172, 176, 189, 0.5); */

        // COLOR PALETTE 04
        border: 1px solid rgba(208, 205, 215, 0.2);

        transition: .2s ease all;
      }
    }
`;

export const Icon = styled.img`
    ${props => props.sidebarOpen && 'padding-right: 10px; transition: .2s ease-in padding-right'};
    height: 20px;
`;

export const DropdownLink = styled.li`

  /* // COLOR PALETTE 01
  color: #fbf5f3; */

  // COLOR PALETTE 04
  color: #416165;

  &:hover {
      /* // COLOR PALETTE 01
      color: #acb0bd; */

      // COLOR PALETTE 04
        color: #d0cdd7;
        transition: .2s ease all;
    }

  list-style: none;
  margin: 5px;
  align-items: center;
  font-size: 13px;
`;
export const Text = styled.span`
    display: ${props => props.sidebarOpen ? 'inline' : 'none'};
`;

export const SubmenuItemContainer = styled.div`
    font-size: 14px;
    ${props => props.sidebarOpen && 'padding-left: 15%'};
    ${props => !props.sidebarOpen && 'text-align: center'};
`;

export const SubmenuItem = styled.p`
  display: ${props => props.sidebarOpen ? 'block' : 'none'};
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const TogglerContainer = styled.div`
    display: none;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 20px auto;

    @media (max-width: 745px) {
      display: block;
    }
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
            height: .2em;
            width: 100%;

            /* // COLOR PALETTE 01
            background: #fbf5f3;
            box-shadow: 
                0 .75em 0 0 #fbf5f3,
                0 1.5em 0 0 #fbf5f3;             */

            // COLOR PALETTE 04
            background: #d0cdd7;
            box-shadow: 
                0 .75em 0 0 #d0cdd7,
                0 1.5em 0 0 #d0cdd7;
        }
`;