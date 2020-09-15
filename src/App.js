import React, {useState, useEffect} from 'react';
import './sass/style.scss';
import Advantages from './components/Advantages';
import Decisions from './components/Decisions';
import ProductsSlider from './components/ProductsSlider';
import Products from './components/Products';

// import DecisionsSlider from './components/DecisionsSlider';
// вариант для потенциальных проблем с горизонтальным скроллом на мобильном разрешении
// будет рендериться по условию, как и Products

const TABLET_WIDTH = 768;
const DESCTOP_WIDTH = 1224;

const settingsSlider = {
  settingsSliderProductsMobile: {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
  },
  settingsSliderProductsTablet: {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  },
};

const App = () => {
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    window.onresize = () => {
      setClientWidth(document.documentElement.clientWidth);
    }
  });

  const isMobile = clientWidth < TABLET_WIDTH;
  const isTablet = clientWidth < DESCTOP_WIDTH;

  return (
    <main className="main">
      <div className="main__wrapper">
        <Advantages />
        <Decisions />
        {isTablet 
          ? <ProductsSlider 
              settingsSlider={settingsSlider}
              isMobile={isMobile} /> 
          : <Products />}       
      </div>
    </main>
  );
}

export default App;
