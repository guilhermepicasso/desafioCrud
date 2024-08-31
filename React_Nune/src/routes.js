import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Painel from './pages/Painel';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<LandingPage/>}/>
                <Route path='/painel'element={<Painel/>}/>
            </Routes>
        </BrowserRouter>
    )

}