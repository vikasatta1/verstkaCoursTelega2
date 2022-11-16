import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Продукция</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Фотогалерея</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
            <div className="titles">
            <div className="links">
                <div className="left">
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                </div>
                <div className="right">
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                    <a href="#">Ссылка на статью</a>
                </div>
            </div>
            </div>
            <p>Строительство, 2019 &copy; Все права защищены</p>
        </footer>
    );
};

export default Footer;