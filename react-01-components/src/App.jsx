
import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
function App() {
  

  const myJsx = (
    <div>
      <Navbar />
      <Home name = "Myrtle la llorona" hogwartsHome = "RavenClaw" />
      <Home name = "Luna Lovegood" hogwartsHome = "RavenClaw" />
      <Footer cohorte={54} />
    </div>
  );
  return myJsx;

}

export default App
