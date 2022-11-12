import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
// import Setting from "./pages/settings/setting";
import Single from "./pages/single/single";
// import Write from "./pages/write/write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/register";
import Write from "./pages/write/write";
import Setting from "./pages/settings/setting";




function App() {
  const currentUser = false;
  return (


    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {currentUser ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {currentUser ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {currentUser ? <Setting /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
