import { Link } from 'react-scroll';
import './App.css';
import {useEffect, useRef} from "react";

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false)

    useEffect(() => {
        if (didMount.current) func()
        else didMount.current = true
    }, deps)
}

function App() {
    useDidMountEffect(() => {
        const modules = document.getElementsByClassName("module_part2");
        const buttonPress = new Array(8).fill(false);
        const modals = document.getElementsByClassName("ModalCircle");
        const Ilnur = document.getElementsByClassName("infoIlnur");
        const Isa = document.getElementsByClassName("infoIsa");

        const results = document.getElementsByClassName("Roller");
        const resultsButtons = document.getElementsByClassName("rollerButton");
        console.log(resultsButtons);
        resultsButtons[0].onclick = function () {
                results[0].style.display = "none";
                results[2].style.display = "block";
        }
        resultsButtons[1].onclick = function () {
            results[0].style.display = "none";
            results[1].style.display = "block";
        }
        resultsButtons[2].onclick = function () {
            results[1].style.display = "none";
            results[0].style.display = "block";
        }
        resultsButtons[3].onclick = function () {
            results[1].style.display = "none";
            results[2].style.display = "block";
        }
        resultsButtons[4].onclick = function () {
            results[2].style.display = "none";
            results[1].style.display = "block";
        }
        resultsButtons[5].onclick = function () {
            results[2].style.display = "none";
            results[0].style.display = "block";
        }
        console.log(modals);
        console.log(modals[1]);
        modals[0].onmouseover = function () {
            Isa[0].style.display = "flex";
        }
        modals[0].onmouseout = function () {
            Isa[0].style.display = "none";
        }
        modals[1].onmouseover = function () {
            Ilnur[0].style.display = "flex";
        }
        modals[1].onmouseout = function () {
            Ilnur[0].style.display = "none";
        }
        let open = false;
        const befores = document.getElementsByClassName("before");
        const afters = document.getElementsByClassName("after");
        const opens = document.getElementsByClassName("plus");
        const closes = document.getElementsByClassName("iks");
        for (let j = 0 ; j < 17; j++) {
            opens[j].onclick = function () {
                befores[j].style.display = "none";
                afters[j].style.display = "flex";
            }
            closes[j].onclick = function () {
                befores[j].style.display = "flex";
                afters[j].style.display = "none";
            }
        }
        const buttons = document.getElementsByClassName("open");
        for (let i = 0; i < 8; i++) {
            buttons[i].onclick = function () {
                if (buttonPress[i] === false) {
                    modules[i].style.display = "flex";
                    buttons[i].style.background = "url(http://localhost:3000/static/media/arrowup.8359c40347a0bf233fa0.svg) no-repeat";
                    buttons[i].style.backgroundSize = "contain";
                    buttonPress[i] = true;
                } else {
                    modules[i].style.display = "none";
                    buttons[i].style.background = "url(http://localhost:3000/static/media/arrowdown.270a7a5a78fd8c227c6f.svg) no-repeat";
                    buttons[i].style.backgroundSize = "contain";
                    buttonPress[i] = false;
                }
            };
        }
        const s1 = document.getElementsByClassName("s1");
        const small = document.getElementsByClassName("small");
        s1[0].onclick = function () {
            if(open === false) {
                s1[0].style.background = "url(http://localhost:3000/static/media/cross.55539c29f8c0b94c0955.svg) no-repeat";
                s1[0].style.height = "24px";
                s1[0].style.width = "24px";
                small[0].style.display = "block";
                open = true;
            } else {
                s1[0].style.background = "url(http://localhost:3000/static/media/burger.d39fb40923d60ea045f0.svg) no-repeat";
                small[0].style.display = "none";
                s1[0].style.height = "24px";
                s1[0].style.width = "24px";
                s1[0].style.backgroundSize = "contain";
                open = false;
            }
        }
    })
  return (
    <div className="App">
        <nav className="big">
            <ul className="big_ul">
                <li><Link activeClass="active" smooth spy to="about">О нас</Link></li>
                <li><Link activeClass="active" smooth spy to="for">Для кого?</Link></li>
                <li><Link activeClass="active" smooth spy to="program">Программа</Link></li>
                <li><Link activeClass="active" smooth spy to="tariff">Тарифы</Link></li>
                <li><Link activeClass="active" smooth spy to="results">Результаты</Link></li>
                <li><Link activeClass="active" smooth spy to="faq">FAQs</Link></li>
            </ul>
            <button className="join">Принять участие</button>
            <button className="s1"></button>
        </nav>
        <nav className="small" >
            <ul>
                <li><Link activeClass="active" smooth spy to="about">О нас</Link></li>
                <li><Link activeClass="active" smooth spy to="for">Для кого?</Link></li>
                <li><Link activeClass="active" smooth spy to="program">Программа</Link></li>
                <li><Link activeClass="active" smooth spy to="tariff">Тарифы</Link></li>
                <li><Link activeClass="active" smooth spy to="results">Результаты</Link></li>
                <li><Link activeClass="active" smooth spy to="faq">FAQs</Link></li>
            </ul>
        </nav>
        <section id="about">
            <div className="left">
                <div className="elipse"></div>
                <div className="info">
                    <p>Начни зарабатывать на Р2Р торговле за две недели
                        по уникальной методике от мотиватора и
                        CryptOn Club от 2к рублей в день</p>
                    <button>Принять участие</button>
                </div>
            </div>
            <div className="right">
                <div className="imgs">
                    <div className="Isa">
                        <div className="Modal_Isa">
                            <div className="ModalCircle"></div>
                            <div className="ModalInfoIsa"></div>
                            <div className="infoIsa">
                                <ul>
                                    <li>Создатель крупнейшего в России мотивационного сообщества</li>
                                    <li>Привлек больше 2млн аудитории </li>
                                    <li>Обучился заработку на арбитраже криптовалюты и за 2 недели заработал больше 150к рублей с абсолютного нуля</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Ilnur">
                        <div className="Modal_Ilnur">
                            <div className="ModalInfoIlnur">
                                <div className="infoIlnur">
                                    <ul>
                                        <li>За последние 3 года заработал 100 000 000+ млн.руб</li>
                                        <li>Обучил больше 300 человек заработку на крипте</li>
                                        <li>Зарабатываем на Р2Р и арбитраже</li>
                                        <li>Также инвестирую в недвижку</li>
                                        <li>Открыл оффлайн бизнес</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ModalCircle"></div>
                            <div className="ModalInfoIlnur"></div>
                        </div>
                    </div>
                    <div className="circle"></div>
                </div>
            </div>
        </section>
        <div className="YellowBanner">
            <h1 className="InfoBanner">
                Дадим пошаговый план работы на Р2Р площадках с минимальными рисками с нуля
            </h1>
            <div className="buttons">
                <button className="programButton"><Link activeClass="active" smooth spy to="program">Программа обучения</Link></button>
                <button className="bannerJoinButton">Принять Участие</button>
            </div>
            <div className="bannerBitcoin1"></div>
            <div className="bannerBitcoin2"></div>
        </div>
        <section id="for">
            <div className="Header">
                <h1>Для кого обучение?</h1>
                <div className="money"></div>
            </div>
            <div className="forCircles">
                <div className="forCircle c1">
                    <div className="student"></div>
                    <p className="name">Студентам</p>
                </div>
                <div className="forCircle c2">
                    <div className="free"></div>
                    <p className="name">Фрилансерам</p>
                </div>
                <div className="forCircle c3">
                    <div className="work"></div>
                    <p className="name">Работникам
                        по найму</p>
                </div>
                <div className="forCircle c4">
                    <div className="business"></div>
                    <p className="name">Предпринимателям</p>
                </div>
            </div>
        </section>
        <section id="program">
            <div className="Header">
                <h1>Программа обучения</h1>
            </div>
            <div className="module mod1">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 1</div>
                        <div className="black">5 уроков</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"/>
                    <h1>Введение</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Ответственность криптоинвестора. Риски.</li>
                            <li>Психотипы инвесторов ( на основе урока разработать тест для прохождения и определения своего типа)</li>
                            <li>От чего зависит успех инвестирования в криптовалюту.</li>
                            <li>Психологические блоки, которые мешают делать большие X. Синдром упущенной выгоды. Боязнь рисковать.</li>
                            <li>Рекомендованные стратегии инвестирования под психотип</li>
                            <li>Постановка цели. Критерии правильной цели</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Трекер активности или дорожная карта курса, чтобы все организационные моменты были в одном месте</li>
                            <li>Чек-лист подготовки к торговле</li>
                            <li>Памятка по психотипам</li>
                            <li>Памятка как правильно ставить цели</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Поставишь цели на курс, определишь свою персональную стратегию прибыльного инвестирования</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod2">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 2</div>
                        <div className="black">3 урока</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Погружение в мир крипты</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Разбор ТОП 10 фундаментальных криптовалют</li>
                            <li>Из чего состоит идеальный криптопортфель. Как распределять и куда лучше вкладывать</li>
                            <li>Способы заработка на крипте (арбитраж, токенсейлы,
                                DEFI, трейдинг, фьючерсная торговля, NFT).Их плюсы и минусы</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Памятка топ 10 криптовалют</li>
                            <li>Чек-лист «Регистрация на бирже»</li>
                            <li>Памятка способы заработка на крипте</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Подберешь под себя оптимальный способ заработка на крипте.
                                Научишься анализировать монетки и узнаешь, что покупать, чтобы делать от 30% в месяц</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod3">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 3</div>
                        <div className="black">3 урока</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Криптокошельки и децентрализованные биржи.
                        Где и как безопасно хранить криптовалюту</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Что такое криптокошелек и какие виды бывают</li>
                            <li>Регистрация кошельков для децентрализованных бирж</li>
                            <li>Пошаговая видеоинструкция по их использованию</li>
                            <li>Разбор способов по тому как себя обезопасить от взлома и не потерять деньги. Ошибки из-за чего это происходит.</li>
                            <li>Регистрация на биржах Binance, FTX и Huobi. Разбор интерфейса биржи (учимся ими пользоваться).</li>
                            <li>Защита аккаунтов</li>
                            <li>Выгодно и безопасно заводим рубли в криптовалюту.</li>
                            <li>Закупка крипты. Формируем основной криптовалютный портфель.</li>
                            <li>Учимся фиксировать прибыль (продавать) и выводить крипту в рубли в любой момент с минимальной комиссией себе на карту</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Как зарегистрироваться на биржах</li>
                            <li>Чек-лист «Как защитить аккаунт»</li>
                            <li>Памятка по основным биржам</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Заведешь криптокошельки и зарегистрируешься на основных криптобиржах.
                                Сформируешь криптопортфель, который в рамках полугода сможет дать больше 500%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod4">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 4</div>
                        <div className="black">5 уроков</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Основа Р2Р</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Что такое Р2Р в криптовалютном мире?</li>
                            <li>Почему Р2Р это круто и безопасно?</li>
                            <li>Пошаговый план регистрации и верификации на Р2Р-площадках</li>
                            <li>Создаем первое объявление на Р2Р. Какие особенности нужно учитывать, чтобы повысить спрос?</li>
                            <li>Основные Р2Р стратегии</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Шаблон идеального объявления</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Узнаешь о том как устроен Р2Р рынок. Грамотно зарегистрируешься
                                и верифицируешься на Р2Р площадках.
                                Узнаешь как работать по основным стратегиям.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod5">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 5</div>
                        <div className="black">3 урока</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Безопасность и Мошенники</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Основные виды мошенничества. </li>
                            <li>Как не попасться на уловки и сохранить свой капитал.</li>
                            <li>Что делать, если вас все таки обманули?</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Чек-лист «25 мошеннических схем»</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Получишь все мошеннические схемы, которые есть на площадках и научишься их избегать</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod6">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 6</div>
                        <div className="black">6 уроков</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Банки. Карты. Блокировки</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Как увеличить срок жизни карты?</li>
                            <li>115-ФЗ - нам это не страшно.</li>
                            <li>Что делать при блокировке карты и как Р2Р-шникам общаться с банками?</li>
                            <li>Какие документы и письма отправлять в банк?</li>
                            <li>Сервисы для помощи разблокировки карт.</li>
                            <li>Налоги и криптовалюта. Как с этим работать рассказывает юрист-эксперт в криптовалюте?</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Шаблон письма для банка</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Правильно прогреешь банковские карты. Научишься получать от банка положительные решения.
                                Узнаешь особенности налогообложения криптовалюты.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod7">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 7</div>
                        <div className="black">6 уроков</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Упаковка рабочего процесса</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Как быстро прокачать аккаунт?</li>
                            <li>Набор профессионального Р2Р-шника. Что нужно для прибыльной Р2Р-торговли?</li>
                            <li>Стратегический анализ рынка и конкурентов.</li>
                            <li>Как вести учёт сделок и почему это важно?</li>
                            <li>Мониторинги агрегаторы P2P-платформ.</li>
                            <li>Психология торговли.</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Шаблон таблицы учета торговли</li>
                            <li>Памятка «Набор Р2Р-шника»</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Узнаешь как быстро прокачать свой аккаунт. Научишься анализировать
                                рынок и конкурентов для прибыльной торговли.
                                Получишь агрегаторы Р2Р платформ для повышения эффективности рабочего процесса.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module mod8">
                <div className="module_part1">
                    <div className="module_group">
                        <div className="yellow">Модуль 8</div>
                        <div className="black">8 уроков</div>
                        <div className="black">Бонусы внутри</div>
                    </div>
                    <button className="open"></button>
                    <h1>Продвинутый Р2Р. Что должен знать и уметь профессиональный Р2P-шник</h1>
                </div>
                <div className="module_part2">
                    <div className="left_md2">
                        <div className="heading_md2">
                            <h2>Программа:</h2>
                        </div>
                        <ul>
                            <li>Прибыльные внутрибиржевые и межбиржевые торговые стратегии.</li>
                            <li>Как переводить криптовалюту между биржами с минимальной комиссией?</li>
                            <li>Как не терять деньги на падающем рынке? Учимся хеджированию.</li>
                            <li>Что такое стягивание и как переводить деньги без комиссии?</li>
                            <li>Как масштабировать и автоматизировать торговлю?</li>
                            <li>Работа на 25 Р2Р площадках, как организовать</li>
                            <li>Как максимизировать торговлю и повысить спред?</li>
                            <li>Визуализация торгового процесса.</li>
                        </ul>
                    </div>
                    <div className="right_md2">
                        <div className="heading_md2">
                            <div className="present"></div>
                            <h2>Бонусы:</h2>
                        </div>
                        <ul>
                            <li>Чек-лист «25 P2P площадок»</li>
                            <li>Сервисы мониторинга арбитражных коридоров</li>
                        </ul>
                        <div className="yellowRes">
                            <h2>Результат:</h2>
                            <p>Получишь прибыльные торговые стратегии и научишься самостоятельно их выявлять.
                                Узнаешь как торговать всегда в плюс.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="tariff">
            <h1>Тарифы</h1>
            <div className="tariffs">
                <div className="One">
                    <div className="header">
                        <p className="name">Новичок</p>
                        <h2 className="price">8 500 ₽</h2>
                    </div>
                    <div className="line"></div>
                    <div className="tariffInfo">
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Введение</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Погружение в мир крипты</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Криптокошельки и децентрализованные биржи. Где и как безопасно хранить криптовалюту</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Основа Р2Р</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Безопасность и Мошенники</p>
                        </div>
                        <div className="oneLine">
                            <div className="red"></div>
                            <p className="lineinfo">Банки. Карты. Блокировки</p>
                        </div>
                        <div className="oneLine">
                            <div className="red"></div>
                            <p className="lineinfo">Упаковка рабочего процесса</p>
                        </div>
                        <div className="oneLine">
                            <div className="red"></div>
                            <p className="lineinfo">Продвинутый Р2Р. Что должен знать и уметь профессиональный Р2P-шник</p>
                        </div>
                    </div>
                    <button className="tariffButton">Выбрать</button>
                </div>
                <div className="One">
                    <div className="header">
                        <p className="name">Базовый
                            P2P - арбитраж</p>
                        <h2 className="price">27 000 ₽</h2>
                    </div>
                    <div className="line"></div>
                    <div className="tariffInfo">
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Введение</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Погружение в мир крипты</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Криптокошельки и децентрализованные биржи. Где и как безопасно хранить криптовалюту</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Основа Р2Р</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Безопасность и Мошенники</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Банки. Карты. Блокировки</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Упаковка рабочего процесса</p>
                        </div>
                        <div className="oneLine">
                            <div className="red"></div>
                            <p className="lineinfo">Продвинутый Р2Р. Что должен знать и уметь профессиональный Р2P-шник</p>
                        </div>
                    </div>
                    <button className="tariffButton">Выбрать</button>
                </div>
                <div className="One">
                    <div className="header">
                        <p className="name">Продвинутый P2P - арбитраж</p>
                        <h2 className="price">95 000 ₽</h2>
                    </div>
                    <div className="line"></div>
                    <div className="tariffInfo">
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Введение</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Погружение в мир крипты</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Криптокошельки и децентрализованные биржи. Где и как безопасно хранить криптовалюту</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Основа Р2Р</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Безопасность и Мошенники</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Банки. Карты. Блокировки</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Упаковка рабочего процесса</p>
                        </div>
                        <div className="oneLine">
                            <div className="green"></div>
                            <p className="lineinfo">Продвинутый Р2Р. Что должен знать и уметь профессиональный Р2P-шник</p>
                        </div>
                    </div>
                    <button className="tariffButton">Выбрать</button>
                </div>
            </div>
        </section>
        <section id="results">
            <div className="Header">
                <h1>Твои результаты после обучения</h1>
                <div className="money"></div>
            </div>
            <div className="Cluster">
                <div className="forSquare c1">
                    <div className="moneyww"></div>
                    <p>Заработал первые деньги на Р2Рпо уникальным стратегиям от команды CryptOn Club</p>
                </div>
                <div className="forSquare c2">
                    <div className="book"></div>
                    <p>Знаешь весь фундамент работы Р2Р рынка, получишь прибыльные торговые стратегии и научишься самостоятельно их выявлять</p>
                </div>
                <div className="forSquare c2">
                    <div className="graph"></div>
                    <p>Прокачаешь свои аккаунты на площадках, что повысит прибыльность торговли в разы</p>
                </div>
                <div className="forSquare c4">
                    <div className="free"></div>
                    <p>Знаешь как анализировать рынок и конкурентов, чтобы забирать максимальную прибыль с торговли</p>
                </div>
                <div className="forSquare c5">
                    <div className="bank"></div>
                    <p>Получишь все мошеннические схемы, которые есть на площадках и научишься их избегать. Правильно прогреешь банковские карты. Научишься получать от банка положительные решения. Узнаешь особенности налогообложения криптовалюты.</p>
                </div>
            </div>
            <div className="YellowResults">
                <div className="yell">
                    <div className="yellowHeader">
                        <div className="fire"></div>
                        <h1>Результаты наших учеников</h1>
                    </div>
                    <div className="Roller">
                        <div className="RollerHeader">
                            <div className="photo p1"></div>
                            <div className="right_side">
                                <h3 className="rollerName">Алексей</h3>
                                <p className="rollerRole">23 года</p>
                            </div>
                        </div>
                        <div className="rollerInfo">
                            Новичок в сфере Р2Р-арбитража. За время недельного обучения изучил сферу и перешёл от теории к практике. Ещё до окончания обучения Алексей научился зарабатывать стабильные 3-8% в день от своего депозита.
                        </div>
                        <div className="Buttongroup">
                            <button className="rollerButton l"></button>
                            <button className="rollerButton r"></button>
                        </div>
                    </div>
                    <div className="Roller c2" style={{ display: "none" }}>
                        <div className="RollerHeader">
                            <div className="photo p2"></div>
                            <div className="right_side">
                                <h3 className="rollerName">Оскар</h3>
                                <p className="rollerRole">31 год</p>
                            </div>
                        </div>
                        <div className="rollerInfo">
                            Узнал о криптовалюте несколько лет назад, предпринимал самостоятельные попытки обучиться, но стоял на одном месте. За время обучения Оскар сделал прорыв, показав результат за 1 неделю больше, чем за годы самостоятельной практики. Сейчас Оскар зарабатывает стабильные 3000-5000 рублей в день на Р2Р и наращивает свой капитал. </div>
                        <div className="Buttongroup">
                            <button className="rollerButton l"></button>
                            <button className="rollerButton r"></button>
                        </div>
                    </div>
                    <div className="Roller c3" style={{ display: "none" }}>
                        <div className="RollerHeader">
                            <div className="photo p3"></div>
                            <div className="right_side">
                                <h3 className="rollerName">Динар</h3>
                                <p className="rollerRole">23 года</p>
                            </div>
                        </div>
                        <div className="rollerInfo">
                            Был неудачный опыт в сфере криптовалюты, терял деньги на фьючерсах. После начала обучения так же отдавал предпочтение рискованным, высокодоходным стратегиям. Благодаря поддержке наставников, в этот раз риск был оправдан. Динар научился зарабатывать 10-12% в день на Р2Р. За 7 дней обучения показал высокий результат- +30 000 рублей к депозиту.</div>
                        <div className="Buttongroup">
                            <button className="rollerButton l"></button>
                            <button className="rollerButton r"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="FAQs">
            <h1>Ответы на вопросы</h1>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">С какой суммы можно начинать?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">С какой суммы можно начинать?</h2>
                    <div className="iks"></div>
                    <p className="answer">Нет никакой установленной начальной суммы. Но чем больше, тем лучше.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Какие риски?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Какие риски?</h2>
                    <div className="iks"></div>
                    <p className="answer">Рынок крипты не гарантирует защиту инвестора. К тому же на рынке есть мошенники.
                        На курсе мы рассказываем, как избежать рисков и защитить свои средства от мошенников.
                        Даем стратегии, как зарабатывать с минимальными рисками.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Сколько можно заработать?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Сколько можно заработать?</h2>
                    <div className="iks"></div>
                    <p className="answer">Тут нет потолка в заработке. Все зависит от того, сколько ты готов вкладывать, какую стратегию выберешь. Х10, Х20, Х30 — реальные цифры для крипты. </p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">У меня вообще нет опыта в крипте и P2P, получится?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">У меня вообще нет опыта в крипте и P2P, получится?</h2>
                    <div className="iks"></div>
                    <p className="answer">Весь образовательный процесс построен так, чтобы даже новичок мог получить результат прямо на стажировке. Все знания, инструменты и решения + поддержку кураторов вы получите сполна.
                        Но это не значит, что мы будем работать за вас, заставлять получать результат. Вам нужно уделить этому достаточно времени и фокуса, это не волшебная таблетка, пусть и довольно простые деньги</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Когда я смогу заработать первые деньги на крипте?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Когда я смогу заработать первые деньги на крипте?</h2>
                    <div className="iks"></div>
                    <p className="answer">Уже после второго модуля ты сформируешь портфель и сможешь зарабатывать первые деньги на крипте.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Сколько времени потребуется на инвестиции?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Сколько времени потребуется на инвестиции?</h2>
                    <div className="iks"></div>
                    <p className="answer">Столько, сколько захочешь. Уделяя крипте 1-2 часа в неделю, ты можешь иметь доход, как в офисе за месяц</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Почему этот курс?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Почему этот курс?</h2>
                    <div className="iks"></div>
                    <p className="answer">Подойдет новичкам и опытным криптоинвесторам — ты в любом случае найдешь для себя полезные материалы и фишки.
                        Каждый ученик выберет инструменты конкретно под себя.
                        Нет воды — только рабочие связки, эффективные инструменты и самая необходимая теория</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Мне понадобятся специальные знания / специальное образование?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Мне понадобятся специальные знания / специальное образование?</h2>
                    <div className="iks"></div>
                    <p className="answer">Нет, специальное образование не нужно! Всему необходимому мы научим тебя на курсе</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Что нужно для обучения?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Что нужно для обучения?</h2>
                    <div className="iks"></div>
                    <p className="answer">Твое желание и любое устройство - телефон, планшет или компьютер</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Как я буду получать обратную связь?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Как я буду получать обратную связь?</h2>
                    <div className="iks"></div>
                    <p className="answer">Ты сможешь задавать вопросы в общем чате, на платформе и во время онлайн-встреч.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Сколько длятся уроки?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Сколько длятся уроки?</h2>
                    <div className="iks"></div>
                    <p className="answer">Уроки короткие, от 5 до 30 минут, в зависимости от темы урока.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Будет ли запись уроков?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Будет ли запись уроков?</h2>
                    <div className="iks"></div>
                    <p className="answer">Да, конечно. Вы сможете посмотреть уроки в удобное для вас время.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Смогу ли я вернуть деньги, если на курсе не понравится?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Смогу ли я вернуть деньги, если на курсе не понравится?</h2>
                    <div className="iks"></div>
                    <p className="answer">Да, в течение 3-х дней после старта.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Что будет, если я не сдам домашнее задание?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Что будет, если я не сдам домашнее задание?</h2>
                    <div className="iks"></div>
                    <p className="answer">Выполнение домашних заданий не влияет на открытие уроков: уроки будут доступны в рамках расписания.
                        На 2-м и 3-м тарифе обратная связь по домашним заданиям будет осуществляться в пределах срока курса.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Что делать после оплаты?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Что делать после оплаты?</h2>
                    <div className="iks"></div>
                    <p className="answer">После оплаты ты получишь письмо на электронную почту о подтверждении оплаты
                        и с доступом к личному кабинету на площадке GetCourse, на котором будет проходить обучение.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Что будет, если я уеду в командировку/отпуск? Вы меня не выгоните с обучения?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Что будет, если я уеду в командировку/отпуск? Вы меня не выгоните с обучения?</h2>
                    <div className="iks"></div>
                    <p className="answer">Доступ к программе выдается в зависимости от тарифов. У тебя точно будет время пройти обучение. В крайнем случае, можешь обсудить этот момент с нами. Срок обратной связи от кураторов предусмотрен только на время курса.</p>
                </div>
            </div>
            <div className="faq">
                <div className="before">
                    <h2 className="questionWhite">Заключаем ли мы с вами договор на обучение?</h2>
                    <div className="plus"></div>
                </div>
                <div className="after">
                    <h2 className="questionYellow">Заключаем ли мы с вами договор на обучение?</h2>
                    <div className="iks"></div>
                    <p className="answer">Услуги по обучению в проекте оказываются на основании нашего договора-оферты.
                        Это сделано для того, чтобы избежать бюрократии и бумажной волокиты при заключении договора с каждым участником.</p>
                </div>
            </div>
        </section>
        <div className="prefooter"></div>
        <footer className="footer">
            <div className="footerInfo">
                <a href="https://docs.google.com/document/d/1vqwgNq7Py9CC58XZhO1EdiYzI6eLiIPCk3vkEkRmnq4/edit" className="politika">Политика конфеденциальности</a>
                <a href="https://docs.google.com/document/d/1UqBxelZ0BMV8QoD2kOeD-1oeWORdKngIWe-sJ03tYwM/edit" className="politika">Публичная оферта</a>
            </div>
        </footer>
    </div>
  );
}

export default App;
