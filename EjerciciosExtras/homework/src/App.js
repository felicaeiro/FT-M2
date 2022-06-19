import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import CommentsPost from "./components/CommentsPost/CommentsPost";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/buscador" component={Buscador} />
      <Route exact path="/" component={Users} />
      <Route exact path="/users/:id/posts/" component={UserPosts} />
      <Route path="/users/:id/posts/hola" component={CommentsPost} />
    </React.Fragment>
  );
}

export default App;
