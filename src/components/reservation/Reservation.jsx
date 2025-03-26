
import { Routes, Route } from 'react-router';
import './Reservation.css';
import Time from './Time';
import Info from './Info';
import Additional from './Additional';

const Reservation = () => {
    return (
        <main className='reservation'>
            <div className='reservation-container'>
                <Routes>
                    <Route path='/' element={<Time/>} />
                    <Route path='/info' element={<Info/>} />
                    <Route path='/additional' element={<Additional/>} />
                </Routes>
            </div>
        </main>
    );
};

export default Reservation;