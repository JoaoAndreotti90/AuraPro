import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
   <Header />
       
       <main className="main-content">
          <Home />
       </main>

       <Footer />
   </>
  );
}

export default App;
