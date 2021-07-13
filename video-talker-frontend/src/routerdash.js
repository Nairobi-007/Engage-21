import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const routerdash = ({children,log}) =>{
    if(!log){
        return <Redirect to="/"/>
    }
    return (
        <Route>{children}</Route>
    )
};

const mapStateToProps = ({dashboard }) => ({
    ...dashboard
  });

export default connect(mapStateToProps)(routerdash);