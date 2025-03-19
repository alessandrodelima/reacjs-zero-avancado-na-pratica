import React from 'react';
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


const Equipe = (props) => {
  return (
    <div>
       <Sobre nome = {props.nome} 
              cargo = {props.cargo} 
              idade = {props.idade} />

        <Social facebook={props.facebook} 
                instagram={props.instagram} 
                linkedin={props.linkedin}/>      
              <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome},   </h2>
      <h3>trabalho como {props.cargo}</h3>
      <h3>e tenho {props.idade} anos</h3>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.facebook}>Facebook</a><br/>
      <a href={props.instagram} >Instagram</a><br/>
      <a href={props.linkedin}> Linkedin</a>
    </div>
  )
}
export default function App() {
  return (
    <div>
     <h1>Conheça nossa equipe: </h1>
     <Equipe nome="Lucas" 
             cargo="Desenvolvedor Java" 
             idade="22"
             facebook="https://www.facebook.com/"
             instagram="https://www.instagram.com/"
             linkedin="https://www.linkedin.com/"
             />
     <Equipe nome="Matheus" 
             cargo="Front-end" 
             idade="30" 
             facebook="https://www.facebook.com/"
             instagram="https://www.instagram.com/"
             linkedin="https://www.linkedin.com/"
             />
    </div>
  )
}