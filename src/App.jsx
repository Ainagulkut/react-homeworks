import Header from './components/Header';

import './App.css'
import Firstblock from './components/Firstblock';
import Secondblock from './components/Secondblock';
import Aboutus from './components/Aboutus';
import Cards from './components/Cards';
import Health from './components/Health';
import Sports from './components/Sports';

function App() {
  return (
    <div>
      <Header />
      <Firstblock />
      <Secondblock />
      <Aboutus />
      <Cards />
      <Health />
      <Sports/>
    </div>
  );
}

export default App
