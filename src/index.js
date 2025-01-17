import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User_Detail from './User_Detail';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/User_Detail" component={User_Detail} exact={true} />
                </Switch>
            </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
