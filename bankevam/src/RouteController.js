import React from "react";
import Dashboard from "./View/Dashboard/Dashboard";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./View/Home/Home";
import SearchList from "./View/search/layout";
import ProductCustomization from "./View/product/customization/customization";

class RouteController extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/:lng(en|lt)?" exact component={Home}/>
                    <Route path="/:lng(en|lt)?/loans" exact component={SearchList}/>
                    <Route path="/:lng(en|lt)?/investors" exact component={SearchList}/>
                    <Route path="/:lng(en|lt)?/warranties" exact component={SearchList}/>
                    <Route path="/:lng(en|lt)?/profile" component={Dashboard}/>
                    <Route path="/:lng(en|lt)?/customize" component={ProductCustomization}/>
                    <Route render={() => <h3>404 Page</h3>}/>
                </Switch>

            </Router>
        )
    }
}

export default RouteController;