import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Main as MainLayout, Minimal as MinimalLayout } from '../../layouts'

const RouteWithLayout = (props) => {
    const { isPrivate,  component: Component, ...rest } = props;

    const isUsuarioLogado = true

    const Layout = isUsuarioLogado ? MainLayout : MinimalLayout


    if(!isUsuarioLogado && isPrivate) {
        return <Redirect  to="/login"/>
    }

    if(isUsuarioLogado && !isPrivate) {
        return <Redirect  to="/dashboard"/>
    }

    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
};

export default RouteWithLayout;
