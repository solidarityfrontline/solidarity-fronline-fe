import React from 'react';
import {Box} from '@mui/material';
import './App.css';
import MainSection from "./page-components/landing/mainSection";
import Header from "./page-components/landing/Header";
import WhoWeAre from "./page-components/landing/WhoWeAre";
import HowItWorks from "./page-components/landing/HowItWokrs";
import WhatIsNextPartTwo from "./page-components/landing/WhatIsNextPartTwo";
import GetInTouch from "./page-components/landing/GetInTouch";
import FooterComponent from "./page-components/landing/FooterComponent";
function App() {
  return (
    <Box component="main" className="bg-black-secondary">
      <Header />
      <MainSection />
      <WhoWeAre />
      <HowItWorks />
      <GetInTouch />
      <WhatIsNextPartTwo />
      <FooterComponent />
    </Box>
  );
}

export default App;
