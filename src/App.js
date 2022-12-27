
import React from 'react';
import './App.css';
import Routing from './components/routing/routing'
import Main from './components/Main';
function App() {
  //<Header isLogged={isLogged} />

  return (

    <div>
      <header>
        <h1>TODO list</h1>
      </header>
      <Main />
      <Routing />
      <footer>
      </footer>
    </div>




  )
  //  <Footer />
}

export default App;
