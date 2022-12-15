import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';

function App() {
  return (
    <div className="App">
      <BlockchainContext.Provider value={{ web3, accounts, contract }}>
        <Router>
          <AppRoutes />
        </Router>
      </BlockchainContext.Provider>
    </div>
  );
}

export default App;
