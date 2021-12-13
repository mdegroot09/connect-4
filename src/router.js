import {React} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';

export default (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
    </Routes>
)