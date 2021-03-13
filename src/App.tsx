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
      content: [
        {
          title: "Sort",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Test",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Algorithm",
          button: {title:"Github",href:"www.github.com"}
        }
      ]
    }
  ]
  let j = [
    {
      src: logo,
      alt: "J",
      title: "J",
      content: [
        {
          title: "Search",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Vaadin",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Garbage Collection",
          button: {title:"Github",href:"www.github.com"}
        }
      ]
    }
  ]
  let r = [
    {
      src: logo,
      alt: "R",
      title: "R",
      content: [
        {
          title: "Search",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Vaadin",
          button: {title:"Github",href:"www.github.com"}
        },
        {
          title: "Garbage Collection",
          button: {title:"Github",href:"www.github.com"}
        }
      ]
    }
  ]
  let tabContent  = [c,j,r];
  return (
      <>
        {
          tabContent.map(tab =>(
              tab.map(content =>(
                  <>
                    <Tab src={content.src} alt={content.alt} title={content.title} content={content.content}/>
                  </>
              ))
          ))
        }
      </>
  );
}

export default App;
