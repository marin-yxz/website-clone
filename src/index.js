import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import EightSection from './Components/EightSection';
import FifthSection from './Components/FifthSection';
import FirstSection from './Components/FirstSection';
import FourthSection from './Components/FourthSection';
import Header from './Components/Header';
import NinthSection from './Components/NinthSection';
import SecondSection from './Components/SecondSection';
import SeventhSection from './Components/SeventhSection';
import SixthSection from './Components/SixthSection';
import ThirdSection from './Components/ThirdSection';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      {' '}
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <NinthSection />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
