import './App.css';
import NewsBlock from './components/news-block/NewsBlock';
import AdvWidget from './components/adv-widget/AdvWidget';
import CurrenciesWidget from './components/currencies-widget/CurrenciesWidget';
import SearchBar from './components/search-bar/SearchBar';
import MainBanner from './components/main-banner/MainBanner';
import WidgetBar from './components/widget-bar/WidgetBar';

import newsBlockData from './data/newsBlockData';
import currencyData from './data/currencyData';
import searchBarData from './data/searchBarData';
import widgetData from './data/widgetData';

function App() {

  return (
    <>
      <header className={'header container'}>
        <div className={'header-left'}>
          <NewsBlock {...newsBlockData} />
          <CurrenciesWidget data={currencyData} />
        </div>
        <div className={'header-right'}>
          <AdvWidget>
            <img className={'adv-widget-image'} src={''} alt={''} />
            <a className={'adv-widget-link'} href={'#'}>Работа над ошибками</a>
            <p className={'adv-widget-text'}>Смотрите на Яндексе и запоминайте</p>
          </AdvWidget>
        </div>
      </header>
      <main className={'container'}>
        <SearchBar data={searchBarData} />
        <MainBanner />
        <WidgetBar data={widgetData} />
      </main>
    </>
  );
}

export default App;
