import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import UsersListContainer from "./containers/users/list";
import CreateUserContainer from "./containers/users/create";
import store from "./redux/store";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route path="/" exact component={UsersListContainer}/>
                            <Route path="/create" component={CreateUserContainer}/>
                        </Switch>
                    </header>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
