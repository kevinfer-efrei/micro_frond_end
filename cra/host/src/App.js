import React from 'react';
import SharedHeader from '../../sharedcomponent/shared/Header'
import SharedFooter from '../../sharedcomponent/shared/Footer'

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <SharedHeader />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <SharedFooter />
  </div>
);

export default App;
