import React from 'react';
// import Index from "./pages/Index"
import { Switch, Route, Redirect } from "react-router-dom"
import asyncComponent from "./util/asyncComponent"
const Index = asyncComponent(() => import("./pages/Index/Index"))
const Collection = asyncComponent(() => import("./pages/Collection/Collection"))
const Details = asyncComponent(() => import("./pages/Details/Details"))
const Comment = asyncComponent(() => import("./pages/Comment/Comment"))
function App() {
  return (
    <div >
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/collection" component={Collection}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/comment" component={Comment}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
