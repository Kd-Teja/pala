import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent from './components/firstcomponent';
import Secondcomponent from './components/secondcomponent';
import Thirdcomponent from './components/thirdcomponent';
import Fourthcomponent from './components/fourthcomponent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sai from './components/fifthcomponent';
import { BrowserRouter } from 'react-router-dom';
import Singleproductpage from './components/singleproductpage';
import Productdetails from './components/productdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />  
     {/* <Sai /> */}
     {/* <Productdetails /> */}
     {/* <Singleproductpage /> */}
    {/* <Firstcomponent />
    <Secondcomponent />*/}
    {/* <Thirdcomponent />  */}
    {/* <Fourthcomponent /> */}
    {/* <Fiifthcomponent /> */}
    </BrowserRouter>
   
    
     </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
