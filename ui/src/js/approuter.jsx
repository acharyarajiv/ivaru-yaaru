import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Summary from 'js/container/summary';
import AddRelation from 'js/container/addrelation';

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={AddRelation} />
          <Route path="/" component={Summary} />
        </Switch>
      </BrowserRouter>
    );
  }
}