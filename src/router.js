import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import Country from './pages/Country'
import Header from './components/Header'

function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/country/:id" component={Country} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router