import React from 'react';
import '../sass/blocks/advantages.scss';

const Advantages = () => {
    return (
        <>
        <div className="visually-hidden">
    <svg>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="arrow"
        fill="none"
        viewBox="0 0 42 48"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M21.3.034a1.445 1.445 0 00-1.348.405L5.43 15.29a1.524 1.524 0 000 2.12 1.444 1.444 0 002.074 0L19.462 5.185v29.349a1.467 1.467 0 002.934 0V5.043l12.1 12.371a1.444 1.444 0 002.075 0 1.524 1.524 0 000-2.121L22.048.443a1.45 1.45 0 00-.747-.41zM1.5 45a1.5 1.5 0 000 3h39a1.5 1.5 0 000-3h-39z"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="shield"
        fill="none"
        viewBox="0 0 44 48"
      >
        <path
          stroke="#000"
          strokeWidth="3"
          d="M42.5 3v15.796a23.5 23.5 0 01-9.2 18.648L22 46.11l-11.3-8.666a23.5 23.5 0 01-9.2-18.648V3A1.5 1.5 0 013 1.5h38A1.5 1.5 0 0142.5 3z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="percent"
        fill="none"
        viewBox="0 0 48 56"
      >
        <rect
          width="2.967"
          height="54.992"
          fill="#000"
          rx="1.484"
          transform="matrix(.6992 .71492 -.6992 .71492 40.451 7)"
        ></rect>
        <circle
          cx="10.5"
          cy="15.845"
          r="7"
          stroke="#000"
          strokeWidth="3"
        ></circle>
        <circle
          cx="34.5"
          cy="39.845"
          r="7"
          stroke="#000"
          strokeWidth="3"
        ></circle>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="phone"
        fill="none"
        viewBox="0 0 32 48"
      >
        <rect
          width="29"
          height="45"
          x="1.5"
          y="1.5"
          stroke="#000"
          strokeWidth="3"
          rx="2.5"
        ></rect>
        <rect width="14" height="3" x="9" y="36" fill="#000" rx="1.5"></rect>
      </symbol>
    </svg>
    </div>
        <section className="advantages">
          <ul className="advantages__list">
            <li className="advantages__item">
              <div className="advantages__icon">
                <svg>
                  <use xlinkHref="#arrow"></use>
                </svg>
              </div>
              <div className="advantages__description">
                Возможность получать доход выше, чем по вкладу
              </div>
            </li>
            <li className="advantages__item">
              <div className="advantages__icon">
                <svg>
                  <use xlinkHref="#shield"></use>
                </svg>
              </div>
              <div className="advantages__description">
                Фиксированный срок инвестирования
              </div>
            </li>
            <li className="advantages__item">
              <div className="advantages__icon">
                <svg>
                  <use xlinkHref="#percent"></use>
                </svg>
              </div>
              <div className="advantages__description">
                Получите +13% к инвестициям ежегодно
              </div>
            </li>
            <li className="advantages__item">
              <div className="advantages__icon">
                <svg>
                  <use xlinkHref="#phone"></use>
                </svg>
              </div>
              <div className="advantages__description">
                Все инвестиции онлайн в одном приложении
              </div>
            </li>
          </ul>
        </section>
        </>
    );
}

export default Advantages;
