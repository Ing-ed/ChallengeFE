import { Header } from './Components/Header/header';
import { useContext } from 'react';
import { Context } from './Components/Context/Context';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Components/Dashboard/dashboard';
import { Session } from './Components/Session/session';

function App() {
  return (
    <div id="page">
      <Header/>
      {/* <Dashboard/> */}
      <Session rute={"login"}/>
    </div>
  );
}

export default App;
