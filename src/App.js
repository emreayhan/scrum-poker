import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AddStoryList from './pages/Add-Story-List/Add-Story-List';
import ViewAsScrumMaster from './pages/View-As-Scrum-Master/View-As-Scrum-Master';
import ViewAsDeveloper from './pages/View-As-Developer/View-As-Developer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Switch>
          <Route exact path="/-add-story-list" component={AddStoryList} />
          <Route path="/-view-as-scrum-master" component={ViewAsScrumMaster} />
          <Route path="/-view-as-developer" component={ViewAsDeveloper} />
        </Switch>
    </div>
    </Provider>
  );
}

export default App;
