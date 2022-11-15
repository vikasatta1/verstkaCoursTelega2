import React from 'react';
import './Header.scss';

import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="top_wrap">
                <div className={'wrap'}>
                    <div className="logo">
                        <img src={logo} alt={'logo'}/>
                    </div>
                    <div className="description">
                        Строительство - отрасль материального производства, в которой создаются основные фонды
                        производственного и непроизводственного назначения: готовые к эксплуатации здания.
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;