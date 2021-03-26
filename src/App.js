import Deck from './components/Deck';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="app">
      <div className="app__body">
        <Deck />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
