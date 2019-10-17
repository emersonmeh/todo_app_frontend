<<<<<<< HEAD
import React from 'react'
import { Router, Route, Redirect, hasHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hasHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)
=======
import React from 'react'
import { Router, Route, Redirect, hasHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hasHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)
>>>>>>> 8a359922aac2a0b36d93645bfbd9e97deeb16ab5
