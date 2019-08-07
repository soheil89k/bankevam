import React from "react";
import Dashboard from "./View/Dashboard/Dashboard";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./View/Home/Home";

class RouteController extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/profile" component={Dashboard}/>
                    <Route render={() => <h3>404 Page</h3>}/>
                </Switch>

            </Router>
        )
    }
}

export default RouteController;