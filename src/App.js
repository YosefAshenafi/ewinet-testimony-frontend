import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/register";
import Write from "./pages/write/write";
import Setting from "./pages/settings/setting";
import { useContext } from "react";
import { Context } from "./context/Context";




function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Setting /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
