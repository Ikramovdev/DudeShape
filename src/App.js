import './App.css';
import AboutUS from './components/AboutUS';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';
import Furniture from './components/Furniture';

function App() {
  return (
    <>
     <Header/>
     <main>
        <Hero/>
        <Companies/>
        <AboutUS/>
        <Furniture/>
     </main>
    </>
  );
}

export default App;
