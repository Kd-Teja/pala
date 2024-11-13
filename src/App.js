import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sai from './components/fifthcomponent';
import Thirdcomponent from './components/thirdcomponent';
import Fourthcomponent from './components/fourthcomponent';
import Singleproductpage from './components/singleproductpage';
import Productdetails from './components/productdetails';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Sai/>} />
           <Route path='/productdetails/:id' element={<Singleproductpage/>} /> 
           {/* <Route path='/secondcomponent' element={<Fourthcomponent />} /> */}
        </Routes>
    </div>
  );
}

export default App;
