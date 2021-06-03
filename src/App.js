import React from 'react';
import "./_app.scss"
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';


function App() {
  return (
    <>
      <Header/>
      <div className="app__container">
        <Sidebar/>
        <Container fluid className="app__main border border-warining">
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
}

export default App;
