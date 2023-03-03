import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import"../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Register from "./components/Home";
import { Switch,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
    </>
  );
}

export default App;
