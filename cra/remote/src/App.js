import React, { useState } from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header';
import SharedFooter from '../../sharedcomponent/shared/Footer';
import LocalLandingPage from './LandingPage';
import api from './api'

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };


  return (
    <><div>
      <SharedHeader title={"API dashboard"} />
      <LocalLandingPage onSearch={handleSearch} />
      {searchValue && <p>Résultat de la recherche : {searchValue}</p>}
      <SharedFooter />
    </div><div>
        <p>{ searchValue != "" ? JSON.stringify(api.getPokemon(searchValue)) : null } </p>
        
      </div></>
  );
};

export default App;