import React from 'react';
import { NavLink} from "react-router-dom";
import * as C from './styles';
import { SidebarData } from '../../helpers/SidebarData';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect } from 'react';
import { Header } from '../Header';
// import { AnimatePresence, motion } from 'framer-motion';

export const Menu = (props, storageKey, initialConfig) => {

    const [open, setOpen] = useLocalStorage(storageKey, initialConfig, false);
    const toggle = (id) => setOpen(id);

    useEffect(() => {
        const updateWindowWidth = () => {
          if (window.innerWidth < 745) props.setSidebarOpen(false);
          else props.setSidebarOpen(true)
        }
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, [props]);

    return (
        <C.Container sidebarOpen={props.sidebarOpen}>
            <Header sidebarOpen={props.sidebarOpen}/>
            
           < C.MenuItemContainer >
            
            
                {SidebarData.map((item, index) => (
                    <C.MenuArea key={index}  sidebarOpen={props.sidebarOpen} >
                        <NavLink to={item.path} onClick={() => toggle(item.navId) }>
                            <C.MenuItem sidebarOpen={props.sidebarOpen} onClick={() => window.innerWidth < 745 ? props.setSidebarOpen(!props.sidebarOpen) : '' }>
                                <C.Icon
                                    src={item.icon}
                                    sidebarOpen={props.sidebarOpen}
                                />
                                <C.Text sidebarOpen={props.sidebarOpen}>{item.title}</C.Text>
                            </C.MenuItem>
                        </NavLink>
                        {/* <AnimatePresence> */}
                        <C.SubmenuItemContainer sidebarOpen={props.sidebarOpen}>
                        {open === item.navId &&  (
                            <>
                                {item.subNav.map((item, index) => (
                                    <NavLink to={item.path} key={index} >
                                        {/* <motion.nav
                                            initial={{opacity: 0, y: -15}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.35}}
                                            exit={{opacity: 0, x: -30}}
                                        > */}
                                        <C.DropdownLink>
                                            <C.SubmenuItem sidebarOpen={props.sidebarOpen} onClick={() => window.innerWidth < 745 ? props.setSidebarOpen(!props.sidebarOpen) : '' }>{item.title}</C.SubmenuItem>
                                        </C.DropdownLink>
                                        {/* </motion.nav> */}
                                    </NavLink>
                                ))}
                            </>
                        )}
                        </C.SubmenuItemContainer >
                        {/* </AnimatePresence> */}
                    </C.MenuArea>
                ))}
            </C.MenuItemContainer>
            <C.TogglerContainer onClick={()=> props.setSidebarOpen(!props.sidebarOpen)}>
                <C.Toggler/>
            </C.TogglerContainer>
        </C.Container >
    );
};