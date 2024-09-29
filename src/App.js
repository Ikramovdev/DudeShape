import './App.css';
import AboutUS from './components/AboutUS';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
     <Header/>
     <main>
        <Hero/>
        <Companies/>
        <AboutUS/>
     </main>
    </>
  );
}

export default App;
