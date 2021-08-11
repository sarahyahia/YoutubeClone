import React, { useState } from 'react';
import "./_app.scss"
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';


function App() {

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
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
}

export default App;
