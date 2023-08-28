import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import CloverResearch from './cloverResearch';
import './main.css'
import Frame2 from './frame2';
import { Frame3 } from './frame3';
import { Frame4 } from './frame4';
import { Footer } from './footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Header/>
    <CloverResearch/>
    <Frame2/>
    <Frame3/>
    <Frame4/>
    <div className="android">
        Наша команда разработала приложение для ОС Android<br />
    </div>
    <img src='..\images\samsunggalaxys.png' className='sumsung'/>
    <div className='elipse1'></div>
    <Footer/>
  </div>
);

