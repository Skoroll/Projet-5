import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import AppartementDetail from './pages/AppartementDetail';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div className='main-container'>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appartement/:id" element={<AppartementDetail />} />
            <Route path="/appartement/*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;