import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/About/About'
import Career from './pages/Career/Career'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Works from './pages/Works/Works'

export default() => {
    return (
        <Switch>
            <Route path={'/'} component={Home} exact />
            <Route path={'/about'} component={About} />
            <Route path={'/services'} component={Services} />
            <Route path={'/works'}  component={Works} />
            <Route path={'/career'} component={Career} />
            <Route path={'/contact'} component={Contact} />
        </Switch>
    )
}
