import React from "react";
import Slider from "react-slick";
import '../sass/blocks/decisions.scss';

const DecisionsSlider = () => {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    return (
      <section className="decisions">
        <h1 className="decisions__description">
          Лучшие готовые инвестиционные<br/> решения
        </h1>

        <Slider {...settings}>
          <div className="decisions__item">
            <span className="decisions__link">
              Гарантированная доходность
            </span>
          </div>
          <div className="decisions__item">
            <span className="decisions__link decisions__link--active">
              Регулярная доходность
            </span>
          </div>
          <div className="decisions__item">
            <span className="decisions__link">
              Ставка на рост
            </span>
          </div>
        </Slider>

       </section>
    );
  };


export default DecisionsSlider;
