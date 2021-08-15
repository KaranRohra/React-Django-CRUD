import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Create from "./components/Form/Create";
import Edit from "./components/Form/Edit";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/edit/:id" component={Edit} />
                <Route exact path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default App;
