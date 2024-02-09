import LocalButton from './Button';
import SharedHeader from '../../sharedcomponent/shared/Header'
import SharedFooter from '../../sharedcomponent/shared/Footer'

const App = () => (
  <div>
    <SharedHeader title={"Client dashboard"} />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <SharedFooter />
  </div>
);

export default App;
