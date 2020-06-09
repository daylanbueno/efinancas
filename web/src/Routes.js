import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Dashboard as DashboardView,
    ProductList as ProductListView,
    UserList as UserListView,
    SignIn as SignInView,
    NotFound as NotFoundView,
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={UserListView}
                exact
                layout={MainLayout}
                path="/usuarios"
            />
            <RouteWithLayout
                component={ProductListView}
                exact
                layout={MainLayout}
                path="/products"
            />
            <RouteWithLayout
                component={SignInView}
                exact
                layout={MinimalLayout}
                path="/login"
            />
            <RouteWithLayout
                component={NotFoundView}
                exact
                layout={MinimalLayout}
                path="/not-found"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
