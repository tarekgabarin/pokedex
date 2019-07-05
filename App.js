import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
    BrowserRouter
} from 'react-router-dom'
import Home from './Containers/Home/Home'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
