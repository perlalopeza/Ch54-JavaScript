
import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/not-found/not-found';



function App() {
  const myJsx = (

    <BrowserRouter> {/* habilita el enrutamiento */}
    {/* Nabvar se mostrara para todas las rutas */}
    <Navbar title ="Dia de Harry Potter" />
    
      <Routes> {/* Define y agrupa un conjunto de rutas */}
    
      <Route path="/" element ={<Home name = "Luna Lovegood" hogwartsHome = "RavenClaw" />} />
      <Route path="/products" element={<Products />} />
    <Route path="*" element={<NotFound />} />
      </Routes>

      
      <Footer cohorte={54} />
    </BrowserRouter>
  );
  return myJsx;

}

export default App
