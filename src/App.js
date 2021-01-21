import Dashboard from "./components/Dashboard";
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/PostList";
import UserIcon from "@material-ui/icons/Group";
import PostIcon from "@material-ui/icons/Book";
import authProvider from "./components/AuthProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" icon={UserIcon} list={UserList} />
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
