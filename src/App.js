import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
// import Write from "./pages/write/write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from "./pages/register/register";
import Setting from "./pages/settings/setting";
import { useContext } from "react";
import Footer from "./components/footer/footer";
import { Context } from "./context/Context";
import Religion from './pages/Religion/religion';
import Write from "./pages/write/write";
import ContactUs from './pages/contact-us/contact-us';

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
        <Route path="/religion">
          <Religion />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
