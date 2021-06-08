import './App.css';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App h-screen" 
       style={{
                    backgroundColor: "#333"
                }}
    >
      <Navbar />
      <div className="flex">
        <AddEntry />
        <Entries />
      </div>
      
    </div>
  );
}

export default App;
