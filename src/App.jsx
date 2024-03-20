import './App.css'
import { Route , Routes ,BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Chat from './pages/Chat';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
