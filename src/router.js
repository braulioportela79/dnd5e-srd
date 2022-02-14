import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';

export const Router = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <BrowserRouter>
            <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};