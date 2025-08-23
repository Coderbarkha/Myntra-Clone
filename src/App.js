import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <FilterSidebar/>
      <Footer />
    </div>
  );
}

export default App;
