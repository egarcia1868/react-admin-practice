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
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/PostList";
import UserIcon from "@material-ui/icons/Group";
import PostIcon from "@material-ui/icons/Book";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" icon={UserIcon} list={UserList} />
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
