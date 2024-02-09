import React, { useState } from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header';
import SharedFooter from '../../sharedcomponent/shared/Footer';
import LocalLandingPage from './LandingPage';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SharedHeader title={"Admin dashboard"}/>
      <LocalLandingPage onSearch={handleSearch} />
      {searchValue && <p>Résultat de la recherche : {searchValue}</p>}
      <SharedFooter />
    </div>
  );
};

export default App;