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
import { GameplayInfo } from './pages/Gameplay/GameplayInfo';
import { GameplayList } from './pages/Gameplay/GameplayList';
import { MagicItemList } from './pages/MagicItem/MagicItemList';
import { MagicItemInfo } from './pages/MagicItem/MagicItemInfo';
import { SpellsList } from './pages/Spells/SpellsList';
import { SpellItemInfo } from './pages/Spells/SpellItemInfo';
import { BardSpellsList } from './pages/Spells/BardSpellsList';
import { ClericSpellsList } from './pages/Spells/ClericSpellsList';
import { DruidSpellsList } from './pages/Spells/DruidSpellsList';
import { PaladinSpellsList } from './pages/Spells/PaladinSpellsList';
import { SorcererSpellsList } from './pages/Spells/SorcererSpellsList';
import { WarlockSpellsList } from './pages/Spells/WarlockSpellsList';
import { WizardSpellsList } from './pages/Spells/WizardSpellsList';

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
                <Route path='/gameplay-mechanics' element={<GameplayList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/gameplay-mechanics/:slug' element={<GameplayInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/magicitems/' element={<MagicItemList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/magicitems/:slug' element={<MagicItemInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/' element={<SpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/:slug' element={<SpellItemInfo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/bard' element={<BardSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/cleric' element={<ClericSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/druid' element={<DruidSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/paladin' element={<PaladinSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/sorcerer' element={<SorcererSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/warlock' element={<WarlockSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
                <Route path='/spells/by-class/wizard' element={<WizardSpellsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
            </Routes>
        </BrowserRouter>
    );
};