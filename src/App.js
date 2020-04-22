import React from 'react';
// import Index from "./pages/Index"
import { Switch, Route, Redirect } from "react-router-dom"
import asyncComponent from "./util/asyncComponent"
const Index = asyncComponent(() => import("./pages/Index"))
const Details = asyncComponent(() => import("./pages/Details"))
function App() {
  return (
    <div >
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
