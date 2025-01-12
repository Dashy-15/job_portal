import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import LayerHeader from './Components/Layers/LayerHeader';
import Sidebar from './Components/Layers/Sidebar';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <LayerHeader />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
