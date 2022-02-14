import * as C from './styles';

import React from 'react'

export const Header = (props) => {
    return (
        <C.Container sidebarOpen={props.sidebarOpen}>
            {
                props.sidebarOpen ? <img src={'/assets/images/logo.png'} alt='' /> : <img src={'/assets/images/logo-short.png'} alt='' />
            }
            
        </C.Container>
    );
};
