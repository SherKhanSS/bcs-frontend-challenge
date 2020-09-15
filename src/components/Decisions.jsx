import React from 'react';
import '../sass/blocks/decisions.scss';

const Decisions = () => {
    return (
        <section className="decisions">
          <h1 className="decisions__description">
            Лучшие готовые инвестиционные решения
          </h1>
          <ul className="decisions__list">
            <li className="decisions__item">
              <span className="decisions__link">
                Гарантированная доходность
              </span>
            </li>
            <li className="decisions__item">
              <span className="decisions__link decisions__link--active">
                Регулярная доходность
              </span>
            </li>
            <li className="decisions__item">
              <span className="decisions__link">
                Ставка на рост
              </span>
            </li>
          </ul>
        </section>
    );
}

export default Decisions;
