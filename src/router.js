import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { CharactersList } from './pages/Characters/CharactersList';
import { CharactersInfo } from './pages/Characters/CharactersInfo';
import { RacesInfo } from './pages/Races/RacesInfo';
import { RacesList } from './pages/Races/RacesList';

export const Router = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <BrowserRouter>
            <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<CharactersList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/characters/:slug' element={<CharactersInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/races' element={<RacesList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/races/:slug' element={<RacesInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
            </Routes>
        </BrowserRouter>
    );
};