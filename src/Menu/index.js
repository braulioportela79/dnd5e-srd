import { useState, useEffect } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarData } from '../../helpers/SidebarData';

export const Menu = () => {

    const [selected, setSelected] = useState(SidebarData[0].title);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleMenuItemClick = name => {
        setSelected(name);
    };

    useEffect(() => {
        const updateWindowWidth = () => {
          if (window.innerWidth < 680) setSidebarOpen(false);
          else setSidebarOpen(true)
        }
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, [sidebarOpen]);
    
    const menuItemJSX = SidebarData.map((item, index) => {
        const isItemSelected = selected === item.title;
        const hasSubmenus = !!item.subNav.length;

        const submenuJSX = item.subNav.map((item, index) =>{
            return (
                <C.SubmenuItem key={index}>{item.title}</C.SubmenuItem>
            )

        })

        return (
            <C.MenuArea
            key={index}
            >
                <C.MenuItem
                    selected={isItemSelected}
                    onClick={()=> handleMenuItemClick(item.title)}
                    sidebarOpen={sidebarOpen}
                >
                    <C.Icon
                        src={item.icon}
                        sidebarOpen={sidebarOpen}
                    />
                    <C.Text
                        sidebarOpen={sidebarOpen}
                    >
                        {item.title}
                    </C.Text>
                    {hasSubmenus &&
                        <C.DropdownIcon
                            selected={isItemSelected}
                        />
                    }
                </C.MenuItem>
                <C.SubmenuItemContainer></C.SubmenuItemContainer>
            </C.MenuArea>
        )
    });

    return (
        <C.Container sidebarOpen={sidebarOpen}>
            <Header/>
            <C.MenuItemContainer>{menuItemJSX}</C.MenuItemContainer>
            <C.TogglerContainer onClick={()=> setSidebarOpen(!sidebarOpen)}>
                <C.Toggler />
            </C.TogglerContainer>
        </C.Container>
    );
};