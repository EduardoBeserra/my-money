import React from 'react'
//import { Switch, Route, Redirect } from "react-router";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div className='content-wrapper'>
        
    </div>
)

/*
<Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
*/