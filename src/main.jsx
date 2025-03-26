import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Main from './components/main_structure/Main.jsx';
import Reservation from './components/reservation/Reservation.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> }>
          <Route path='/' element={ <Main/> } />
          <Route path='/reservation/*' element={ <Reservation /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

