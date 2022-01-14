import React from 'react'
import Header from "./components/Header";
import Main from './components/Main-container';
import data from './data.js'

function App() {
  const dataElements = data.map( item => {
    if(item.id == data.length){
      return <Main 
              key={item.id}
              {...item}
              lastElement ={true}
            />
    }
    return <Main 
            key={item.id}
            {...item}
          />
  })
  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        {dataElements}
      </div>
    </div>
  );
}

export default App;
