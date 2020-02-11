import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TextComponent from '../Components/TextComponent/TextComponent';


const Routes = () => {
    return (
        <Switch>
            <Route path ="/" component={TextComponent}/>
        </Switch>
    );
};

export default Routes;