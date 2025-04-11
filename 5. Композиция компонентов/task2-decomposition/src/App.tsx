import Header from './components/Header';
import TopNews from './components/TopNews';
import CurrencyRates from './components/CurrencyRates';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Advertisement from './components/Advertisement';
import Weather from './components/Weather';
import MapLink from './components/MapLink';
import LiveTV from './components/LiveTV';
import Popular from './components/Popular';
import TVSchedule from './components/TVSchedule';
import ErrorHandling from './components/ErrorHandling';

import './App.css';

/**
 * @file Корневой компонент приложения, объединяющий все остальные компоненты.
 */

function App() {
  return (
    <div>
      <Header />
      <TopNews />
      <CurrencyRates />
      <ErrorHandling />
      <Navigation />
      <SearchBar />
      <Advertisement />
      <div>
        <div>
          <Weather />
          <MapLink />
          <Popular />
        </div>
        <div>
          <LiveTV />
          <TVSchedule />
        </div>
      </div>     
    </div>
  );
}

export default App;