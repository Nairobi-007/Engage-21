import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const routerlogin = ({children,log}) =>{
    
    if(log){
        return <Redirect to="/dashboard"/>
    }
    return (
        <Route>{children}</Route>
    )
};

const mapStateToProps = ({dashboard }) => ({
    ...dashboard
  });

export default connect(mapStateToProps)(routerlogin);