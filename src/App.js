import React from 'react'
import './App.css';
import NavigationBar from './NavigationBar';
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/homepage" component={Homepage}/>
                        <Route exact path="/contactus/:userName/:e_mail" component={ContactUs}/>
                    </Switch>

                </div>
            </Router>

        );
    }
}

export default App;
