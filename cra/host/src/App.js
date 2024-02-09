import React from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header'
import SharedFooter from '../../sharedcomponent/shared/Footer'
import Form from './Form'

const App = () => (
  <div>
    <SharedHeader title={"Admin dashboard"}/>
    <Form/>
    <SharedFooter />
  </div>
);

export default App;