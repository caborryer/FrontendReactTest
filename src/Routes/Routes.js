import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TextComponent from '../Components/TextComponent/TextComponent';
import Post from '../Components/Post/Post';


const Routes = () => {
  return (
    <Switch>
      <Route path="/cvsGraph" component={TextComponent}/>
      <Route path="/posts" component={Post}/>
    </Switch>
  );
};

export default Routes;