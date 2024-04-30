import './App.css';
import Pergunta from './Pergunta.js'
import PagodeQuestion from './pagode.js';
import { useState } from 'react';
import ButtonState from './buttonState.js';
import ExemploUseEffect from './exemploUseEffect.js';
import FetchData from './fetchData.js';
import CamerasScreen from './screens/CamerasScreen.js';
import CadastrarScreen from './screens/CadastrarScreen.js';
import LoginScreen from './screens/Login.js';
import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/itens">Itens</Link>
        <Link to="/login">Login</Link>        
        <Link to="/cadastrar">Cadastrar</Link>        
        <Link to="/contact">Contato</Link>
        <Link to="/logout">Logout</Link> 
      </nav>
    <Outlet/>
    </div>
  );
}

function foo(){
  return "oi";
}



function Pergunta2(){
  return (
    // Comente a DIV abaixo para ver o erro
    <div>
      <h1>Perguntas</h1>
      <p>Perguntas vem aqui</p>
    </div>
  )
}

var title = "Isso é um texto";
var flag = true;

function Foo3(){
  return (
    <div>
      {flag ? title :"No title"}
    </div>
  )
}

function Foo4(){
  if (flag == true){
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }else{
    return (
      <div>
        <h1>No title</h1>
      </div>
    )    
  }

}
export default App;
