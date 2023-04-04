import React from 'react';
import {
  ChakraProvider,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Train from './components/Security/Train';
import Loading from './components/Security/Loading';
import Homepage from './pages/Homepage';
import About from './pages/About';
import ExistingRecord from './pages/Security/ExistingRecord'
import NewRecord from './pages/Security/NewRecord'
<<<<<<< HEAD
import TestRecord from './components/Security/TestRecord'
import Propellers from './pages/Settings/Propellers';
import Directions from './pages/Settings/Directions';

import Surveillance from './pages/Surveillance'
=======
import CameraViewing from './components/CameraViewing/CameraViewing';
import Surveillance from './components/Surveillance'
>>>>>>> 1cf374cca52ef2201dbe55f391bd94cccaf1487f
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Security/ExistingRecord' element={<ExistingRecord />} />
        <Route path='/Security/NewRecord' element={<NewRecord />} />
        <Route path='/Security/Train' element={<Train />} />
<<<<<<< HEAD
        <Route path='/Security/Loading' element={<Loading />} />
        <Route path='/Security/TestRecord' element={<TestRecord />} />
        <Route path='/Settings/Propellers' element={<Propellers />} />
        <Route path='/Settings/Directions' element={<Directions />} />
        <Route path='/Surveillance' element={<Surveillance />} />
=======
        <Route path='/Cameraviewing' element={< CameraViewing/>} />
>>>>>>> 1cf374cca52ef2201dbe55f391bd94cccaf1487f
      </Routes>
      </BrowserRouter>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
