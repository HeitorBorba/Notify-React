import React from 'react';
import ios from './components/imagens/icone-ios.png';
import android from './components/imagens/icone-android.png'
import windows from './components/imagens/icone-windows.png'
import mao from './components/imagens/hand.png'

import './components/css/Header.css';


const Header = () => {
  return (
    <div className="Header">
        <div>
            <h1>Notify <span>.</span></h1>

            <p>A great new free psd theme to showcase your new aplication</p>

            <div id="celular">
                <img src={ios} alt="ios"/>
                <img src={android} alt="android"/>
                <img src={windows} alt="windows"/>

            </div>
        </div> 

        <div id="mao">
            <img src={mao} alt="mão"/>
        </div>

    </div>
  );
}

export default Header;