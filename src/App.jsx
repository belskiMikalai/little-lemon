import Header from './components/main_structure/Header'
import Main from './components/main_structure/Main'
import Footer from './components/main_structure/Footer'
import { Outlet } from 'react-router';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
