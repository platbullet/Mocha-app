import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ComprehensiveList from './ComprehensiveList'
import addlist from './addlist'
import deletelist from './deletelist'


//all the routes in my react app

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/lists' component={ComprehensiveList}/>
        <Route path='/addlist' component={addlist}/>
        <Route path='/deletelist' component={deletelist}/>

      </Switch>
    </main>
  )
  
  export default Main;