import React from 'react';
import './Navigation.scss'
import {ImSearch} from 'react-icons/im'
import icon_top from '../../assets/top_icon.png'

const Navigation = () => {
    return (
        <div className={'container'}>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Продукция</a>
                            <ul className={'submenu'}>
                                <li><a href="#">Кирпичи,блоки</a></li>
                                <li><a href="#">Сыпучие материалы</a></li>
                                <li><a href="#">Пиломатериалы</a></li>
                                <li><a href="#">Изоляционные материалы</a></li>
                                <li><a href="#">Опоры</a></li>
                                <li><a href="#">Окна</a></li>
                            </ul>
                        </li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Фотогалерея</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
                <form>
                    <input type="text" placeholder={''}/>
                    <button type={'button'}><ImSearch/></button>

                </form>
                <img src={icon_top} alt={'home-man'}/>
            </div>
            <div className="soc-icons">
                <p>
                    Подписаться на наши новости:
                    <a href="#"><i></i></a>
                    <a href="#"><i></i></a>
                    <a href="#"><i></i></a>
                    <a href="#"><i></i></a>
                </p>
            </div>
            <div className="banner">
                <div className="slider">
                    <div className="arrow_left"></div>
                    <div className="photo">
                        <p>Строительство домов под ключ</p>
                    </div>
                    <div className="arrow_right"></div>
                </div>
                <div className="slider_switch">
                    <span className={'active'}></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;