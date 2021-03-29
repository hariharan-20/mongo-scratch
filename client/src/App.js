// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;


import React, { useState, useEffect } from "react";

// SERVICES
import usersService from './services/usersService';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if(!users) {
      getUsers();
    }
  })

  const getUsers = async () => {
    let res = await usersService.getAll();
    console.log(res);
    setUsers(res);
  }

  const renderUsers = user => {
    return (
      <li key={user._id}>
        <h3>{user.name}</h3>
        <p>{user.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(users && users.length > 0) ? (
          users.map(user => renderUsers(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props){
//     super(props)

//     this.getProducts = this.getProducts.bind(this)

//     this.state = {
//       email: '',
//       pass: '',
//       ph: ''
//     }
//   }