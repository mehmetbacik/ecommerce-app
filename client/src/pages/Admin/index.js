import React from "react";
import "./styles.css";
import {Box} from "@chakra-ui/react";
import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/new";

function Admin() {
    const {path, url} = useRouteMatch();
    return (
        <div>
            <nav className="admin-menu">
                <li>
                    <Link to="{url}">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/orders`}>
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/products`}>
                        Products
                    </Link>
                </li>
            </nav>
            <Box mt="10">
                <Switch>
                    <Route exact path={path} component={Home}/>
                    <Route path={`${path}/orders`} component={Orders}/>
                    <Route path={`${path}/products`} component={Products}/>
                    <Route path={`${path}/products/news`} component={NewProduct}/>
                    <Route exact path={`${path}/products/:product_id`} component={ProductDetail}/>
                </Switch>
            </Box>
        </div>
    );
};

export default Admin;