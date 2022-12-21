
import React from 'react';
import './App.css';

import Main from './components/Main';
import SimpleHOC from './components/Ex';
import { InputWithNameValidation, InputWithNameAndEmailValidation } from "./components/ExValid/withRequired"
function App() {
  //<Header isLogged={isLogged} />

  return (

    <div>
      <header>
        <h1>TODO list</h1>
      </header>

      <SimpleHOC />


      <br />
      <InputWithNameValidation />
      <br />
      <InputWithNameAndEmailValidation />



      <footer>
      </footer>
    </div>




  )
  //  <Footer />
}

export default App;
