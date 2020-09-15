import React from 'react';
import '../sass/blocks/products.scss';

const Products = () => {
    return (
        <>
          <div className="visually-hidden">
            <svg>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="alibaba"
                fill="none"
                viewBox="0 0 72 56"
              >
                <rect width="56" height="56" x="16" fill="#fff" rx="28"></rect>
                <path
                  fill="#000"
                  d="M30.931 34.163c-.144-.014-.374-.144-.532-.273-1.54-1.51.431-3.251 2.733-4.258v-2.878c.532.346.835.36.849.403l1.755-1.74-.59-1.497c5.136-1.77 7.194-2.446 11.366-3.15l-.748-.705 1.222-.691c2.806.92 5.453 1.165 4.992 3.525.116-1.597-1.87-2.201-4.89-3.05l-.59.36 1.121.92c-4.992.863-8.07 1.842-11.725 3.108l.504 1.294-1.842 1.828c.303.086 3.51 1.15 6.834-1.166 0 0 .072-.043.072-.072-.1-.158-.33-.345-.604-.59.978.072 1.611.921 1.496 1.813h-.46a1.59 1.59 0 00-.13-.806c-2.575 1.885-5.568 2.159-8.114 1.267v2.23c-1.237.431-3.438 1.798-3.424 3.121.087.619.403.85.705 1.007z"
                ></path>
                <path
                  fill="#E28140"
                  d="M41.464 33.426c-2.763 1.396-5.41 2.518-9.481 2.676-5.309-.115-6.129-3.64-3.626-7.322 2.374-3.712 6.143-7.079 12.128-9.18 1.74-.618 4.287-1.308 6.747-1.351 3.54-.03 6.978 1.064 6.748 4.46-.13 2.603-3.885 6.258-5.856 8.89-.848 1.151-.992 1.9.46 1.827 5.252-.345 10-2.158 14.416-4.042-2.992 2.028-18.43 9.667-18.487 4.46.015-.662.317-1.367.82-2.115.49-.748 1.166-1.525 1.87-2.316 1.05-1.195 3.67-4.072 4.547-5.798 1.482-3.223-1.827-3.381-4.69-4.388l-1.223.69.748.705c-4.172.69-6.23 1.381-11.365 3.151l.59 1.496-1.741 1.727c-.043-.044-.302-.058-.849-.403v2.877c-2.287 1.007-4.273 2.748-2.733 4.258.158.13.388.26.532.274 2.82 1.582 10.459-.576 10.445-.576z"
                ></path>
              </symbol>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="multibarrier"
                fill="none"
                viewBox="0 0 72 56"
              >
                <rect width="56" height="56" fill="#fff" opacity="0.3" rx="28"></rect>
                <rect
                  width="56"
                  height="56"
                  x="8"
                  fill="#fff"
                  opacity="0.4"
                  rx="28"
                ></rect>
                <rect width="56" height="56" x="16" fill="#fff" rx="28"></rect>
                <path
                  fill="#3E4348"
                  fillRule="evenodd"
                  d="M33.347 12h21.305A5.347 5.347 0 0160 17.347V38.65a5.348 5.348 0 01-5.348 5.348H33.347A5.348 5.348 0 0128 38.65V17.347A5.347 5.347 0 0133.347 12zm19.151 26.181c.932 0 1.688-.755 1.688-1.687l-.005-16.988c0-.932-.755-1.687-1.687-1.687H35.508a1.687 1.687 0 00-1.688 1.689v16.986c0 .932.756 1.687 1.688 1.687h16.99z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#3E4348"
                  d="M40.605 32.338a.969.969 0 01-.961-.969v-6.781a.97.97 0 01.968-.974h6.791a.97.97 0 01.969.974v6.78a.97.97 0 01-.969.973l-6.798-.003z"
                ></path>
              </symbol>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="sberbank"
                fill="none"
                viewBox="0 0 72 56"
              >
                <rect width="56" height="56" x="16" fill="#fff" rx="28"></rect>
                <path
                  fill="#53B56C"
                  d="M57.397 19.025c-.348-.48-.693-.96-.997-1.443L37.757 28.369l-9-5.197a6.343 6.343 0 00-.375 1.745l9.46 5.518 19.555-11.41z"
                ></path>
                <path
                  fill="#53B56C"
                  d="M37.757 32.43l-9.667-5.59c-.072.343-.1.695-.087 1.046 0 4.274 1.686 8.372 4.686 11.395 3 3.022 7.07 4.72 11.313 4.72a15.94 15.94 0 0011.312-4.72c3-3.023 4.686-7.121 4.686-11.395a15.913 15.913 0 00-1.733-7.335L37.757 32.43z"
                ></path>
                <path
                  fill="#53B56C"
                  d="M55.099 16.23a17.746 17.746 0 00-1.432-1.224l-15.91 9.302-7.672-4.411c-.259.48-.521 1.005-.825 1.571l8.41 4.891L55.1 16.23z"
                ></path>
                <path
                  fill="#53B56C"
                  d="M52.106 13.96a15.12 15.12 0 00-1.874-.96l-12.475 7.237-5.591-3.177c-.375.378-.75.873-1.125 1.353l6.674 3.845 14.391-8.299z"
                ></path>
              </symbol>
            </svg>
          </div>
          <section className="products">
            <div className="products__list">
              <div className="products__item products__item--alibaba">
                <div className="products__name">
                  <span className="products__title">
                    защищённые
                    <br/>
                    инвестиции в Alibaba
                  </span>
                  <span className="products__logo">
                    <svg>
                      <use xlinkHref="#alibaba"></use>
                    </svg>
                  </span>
                </div>
                <div className="products__terms">
                  <div className="products__column">
                    <span>3 мес.</span>
                    <span>срок
                      размещения</span>
                  </div>
                  <div className="products__column">
                    <span>от 300 000 ₽</span>
                    <span>минимальная
                      сумма</span>
                  </div>
                </div>
                <div className="products__profitability">
                  <span className="products__percent">10%</span>
                  <span className="products__info">максимальная  доходность</span>
                </div>
              </div>
              <div className="products__item products__item--multibarrier">
                <div className="products__name">
                  <span className="products__title">
                    Нота №81
                    <br/>
                    «Мультибарьер»
                  </span>
                  <span className="products__logo">
                    <svg>
                      <use xlinkHref="#multibarrier"></use>
                    </svg>
                  </span>
                </div>
                <div className="products__terms">
                  <div className="products__column">
                    <span>от 1 250 $</span>
                    <span>минимальная
                      сумма</span>
                  </div>
                  <div className="products__column">
                    <span>5 лет</span>
                    <span>срок
                      размещения</span>
                  </div>
                </div>
                <div className="products__profitability">
                  <span className="products__percent">15%</span>
                  <span className="products__info">максимальная доходность</span>
                </div>
              </div>
              <div className="products__item products__item--sberbank">
                <div className="products__name">
                  <span className="products__title">
                    защищённые
                    <br/>инвестиции в сбербанк
                  </span>
                  <span className="products__logo">
                    <svg>
                      <use xlinkHref="#sberbank"></use>
                    </svg>
                  </span>
                </div>
                <div className="products__terms">
                  <div className="products__column">
                    <span>3 мес.</span>
                    <span>срок
                      размещения</span>
                  </div>
                  <div className="products__column">
                    <span>от 300 000 ₽</span>
                    <span>минимальная
                      сумма</span>
                  </div>
                </div>
                <div className="products__profitability">
                  <span className="products__percent">10%</span>
                  <span className="products__info">максимальная  доходность</span>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default Products;