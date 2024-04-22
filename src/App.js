import './App.css';
import Pergunta from './Pergunta.js'
import PagodeQuestion from './pagode.js';
import { useState } from 'react';
import ButtonState from './buttonState.js';
import ExemploUseEffect from './exemploUseEffect.js';
import FetchData from './fetchData.js';

function App() {
  return (
    <div className="App">
    <FetchData />
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
