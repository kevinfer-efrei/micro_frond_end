import React from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header'
import SharedFooter from '../../sharedcomponent/shared/Footer'
import Form from './Form'

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <SharedHeader title={"Admin dashboard"}/>
    <Form/>
    <SharedFooter />
  </div>
);

export default App;
