import React from "react";
import SessionContainer from './session_forms/session_container';
import {  Route, } from 'react-router-dom';
import splashpage_container from './background/splashpage_container';
import signup_cont from './session_forms/signup_cont';
import { AuthRoute,  ProtectedRoute } from '../util/route_utils';
import HomePageContainer from './home_page/home_page_cont';
import SearchPage from './search/search_container';
import NavBarCont from '../components/nav_bar/nav_bar_cont';
import ViewContainer from '../components/veiw/view_cont'

const App = () => (
  <>
    <AuthRoute exact path="/" component={splashpage_container} />
    <AuthRoute path="/login" component={SessionContainer} />
    <AuthRoute path="/signup/:email" component={signup_cont} />
    <ProtectedRoute path="/" component={NavBarCont} />
    <ProtectedRoute exact path="/browse" component={HomePageContainer} />
    <Route path="/search/:query" component={SearchPage} />
    <ProtectedRoute exact path='/browse/:videoId' component={ViewContainer}/>
  </>
);

export default App;