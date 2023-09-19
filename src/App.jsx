// Import data

// Import components
import './App.css';
import SearchBar from './components/SearchBar';
import Directory from './components/Directory';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar';

function App(){
  return (
    <div className ="App" style={{"display": "flex"}}>
        <Sidebar />
        <div>
        <SearchBar />
        <Directory />
        <Gallery />
        </div>
      </div>
  );
}

export default App;
