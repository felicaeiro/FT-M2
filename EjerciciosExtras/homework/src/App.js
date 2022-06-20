import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/filter/posts" component={Buscador} />
      <Route exact path="/" component={Users} />
      <Route exact path="/users/:id/posts/" component={UserPosts} />
    </React.Fragment>
  );
}

export default App;
