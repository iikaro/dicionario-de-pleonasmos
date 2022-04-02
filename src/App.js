import React, { Component } from 'react'
import './App.css'
import DictList from './dict/dictList';


class App extends Component {
  render () {
    return (
      <div className='App'>
        <DictList />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Bem-vindo ao primeiro dicionário de pleonasmos online da língua portuguesa!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
