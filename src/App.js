import { Header } from './Components/Header/header';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from './Components/Context/Context';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Components/Dashboard/dashboard';
import { Session } from './Components/Session/session';

function App() {
  const rute = useLocation();
  const route = rute.pathname.replace("/","") || "default";
  
  console.log(route, "ruta, app")
  return (
    <div id="page">
      <Header route = {route}/>
      {route === "dashboard" ? <Dashboard/> : <Session route={(route === 'default') ? 'login' : route}/>}
    </div>
  );
}

export default App;
