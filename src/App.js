import { Header } from './Components/Header/header';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Dashboard/dashboard';

function App() {
  return (
    <div id="page">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
