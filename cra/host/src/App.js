import React from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header'
import SharedFooter from '../../sharedcomponent/shared/Footer'

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <SharedHeader title={"Admin dashboard"}/>
    
    
    <SharedFooter />
  </div>
);

export default App;
