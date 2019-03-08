import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import NavigationBar from './components/navigationBar';
import './App.css';


const App = () => {
    const renderSwitch = () => (
     
        <Switch>
            {Routes.map(route => {
                const component =  route.component;
                return (
                    <Route
                        key={route.path}
                        exact={route.isExact}
                        path={route.path}
                        component={component}
                    />
                );
            })}
        </Switch>
    );

    return (
        <Router>
            <React.Fragment>
                <NavigationBar Routes={Routes.filter(route => route.isNavBar)}/>
                <div id='ui-content'>
                    {renderSwitch()}
                </div>
            </React.Fragment>
        </Router>
    );
};


export default App;
 