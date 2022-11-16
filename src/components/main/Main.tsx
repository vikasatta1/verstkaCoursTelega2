import React from 'react';
import './Main.scss'
import news from '../../assets/news.png';
import title from '../../assets/title.jpg';


const Main = () => {
    return (
        <div className={'content'}>
            <section>
                <h2>Новости</h2>
                <article>
                    <img src={news} alt={'news'}/>
                    <p>Строительство и ремонт, выбор подрядчика</p>
                </article>
                <article>
                    <img src={news} alt={'news'}/>
                    <p>Строительство и ремонт, выбор подрядчика</p>
                </article>
                <article>
                    <img src={news} alt={'news'}/>
                    <p>Строительство и ремонт, выбор подрядчика</p>
                </article>
                <aside>
                    <p>Ваша реклама</p>
                </aside>
            </section>
            <div className="right">
                <div className='wrap_title'>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="title">
                        <div className="icons">
                            <span>&#10084;</span>
                            <span>&#10150;</span>
                        </div>
                        <img src={title} alt={'home'}/>
                        <p>Как правильно выбрать материал для дома</p>
                        <p>Потребителей интересуют способы строительства быстровозводимых зданий, которые по праву
                            считаются в наше время наиболее...</p>
                        <div className="bottom">
                            <span>Просмотров: 1</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <span>&laquo;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>&raquo; </span>
                </div>
            </div>
        </div>
    );
};

export default Main;