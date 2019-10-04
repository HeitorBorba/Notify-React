import React from 'react';
import icone1 from './components/imagens/icone1.png';
import icone2 from './components/imagens/icone2.png';
import icone3 from './components/imagens/icone3.png';

import './components/css/Header.css';

const NavBar = () => {
    return (
        <div className="NavBar">

           <div>
           <img src={icone1} alt="icone-1" />
                <h4>Editable Theme</h4> 
                <p>asjdkhaskjd</p>
           </div>

            <div>
                <img src={icone2} alt="icone-2" />
                <h4>Flat Design</h4>
                <p>jasdkjasdkjasd</p>
            </div>

            <div>
                <img src={icone3} alt="3" />
                <h4>Reach your audience</h4>
                <p>jdajhdasdaskjd</p>
            </div>

        </div>
    );
}
                  
export default NavBar;