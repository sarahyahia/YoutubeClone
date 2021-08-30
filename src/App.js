import React, { useState, useEffect } from 'react';
import "./_app.scss"
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

import { 
  Redirect,
  Route, 
  Switch,
  useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Layout = ({children}) => {

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)


  return (
    <>
      <Header handleToggleSidebar = {handleToggleSidebar}/>
      <div className="app__container">
        <Sidebar 
          sidebar={sidebar}
          handleToggleSidebar = {handleToggleSidebar}
        />
        <Container fluid className="app__main border border-warining">
          {children}
        </Container>
      </div>
    </>
  )
}



function App() {

  const {accessToken, loading} = useSelector(state=>state.auth)

  const history =useHistory();

  useEffect(()=>{
    if(!accessToken && !loading){
      history.push('/auth')
    }
  },[accessToken, loading, history])

  return (
 
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen/>
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen/>
        </Route>
        <Route path="/search">
          <h1>Search</h1>
        </Route>
        <Redirect to="/"/>
      </Switch>

  );
}

export default App;
