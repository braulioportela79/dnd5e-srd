import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { CharactersList } from './pages/Characters/CharactersList';
import { CharactersInfo } from './pages/Characters/CharactersInfo';
import { RacesInfo } from './pages/Races/RacesInfo';
import { RacesList } from './pages/Races/RacesList';
import { ClassesInfo } from './pages/Classes/ClassesInfo';
import { ClassesList } from './pages/Classes/ClassesList';
import { EquipmentInfo } from './pages/Equipment/EquipmentInfo';
import { EquipmentList } from './pages/Equipment/EquipmentList';
import { CombatInfo } from './pages/Combat/CombatInfo';
import { CombatList } from './pages/Combat/CombatList';
import { RunningInfo } from './pages/Running/RunningInfo';
import { RunningList } from './pages/Running/RunningList';

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
                <Route path='/classes' element={<ClassesList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/classes/:slug' element={<ClassesInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/equipment' element={<EquipmentList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/equipment/:slug' element={<EquipmentInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/combat' element={<CombatList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/combat/:slug' element={<CombatInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/running' element={<RunningList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/running/:slug' element={<RunningInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
            </Routes>
        </BrowserRouter>
    );
};