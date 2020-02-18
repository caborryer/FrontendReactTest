import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TextComponent from '../Components/TextComponent/TextComponent';
import UserPosts from '../Components/userPosts.js/UserPosts';


const Routes = () => {
  return (
    <Switch>
      <Route path="/cvsGraph" component={TextComponent}/>
      <Route path="/post" component={UserPosts}/>

    </Switch>
  );
};

export default Routes;