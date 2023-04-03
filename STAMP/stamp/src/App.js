import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
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
import Train from './components/Security/Train'
import Homepage from './pages/Homepage';
import About from './pages/About';
import ExistingRecord from './pages/Security/ExistingRecord'
import NewRecord from './pages/Security/NewRecord'
import Surveillance from './components/Surveillance'
import Surveillance from './components/Surveillance';
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
      </Routes>
      </BrowserRouter>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
