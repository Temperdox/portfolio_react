import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './Tab';

function App() {
  let c = [
    {
      src: logo,
      alt: "C",
      title: "C",
      content: ["sort","test","algorithm"],
      buttons: ["Github","Github","Github"]
    }
  ]

  let j = [
    {
      src: logo,
      alt: "J",
      title: "J",
      content: ["search","vaadin","garbage collection"],
      buttons: ["Github","Github","Github"]
    }
  ]
  let tabContent  = [c,j];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          tabContent.map(tab =>(
            tab.map(content =>(
                <>
                  <Tab src={content.src} alt={content.alt} title={content.title} content={content.content}/>
                </>
            ))
          ))
        }
      </header>
    </div>
  );
}

export default App;
