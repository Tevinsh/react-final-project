import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPerson from './pages/AddPerson';
import EditPerson from './pages/EditPerson';

function App() {
  return (
    <div className='transition duration-300'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tambah' element={<AddPerson />} />
        <Route path='/edit/:key' element={<EditPerson />} />
      </Routes>
    </div>
  );
}

export default App;
