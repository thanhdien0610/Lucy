
// import './App.css';
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Assist/Service'
import Staff from './Components/Staff/Staff';
import './App.scss'
// import Logo from '../public/assets/img/Logo.svg';
function App() {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    //   <nav style={{borderBottom:'1px solid', paddingBottom: '1rem'}}>
    //     <Link to='invoices'> Invoices</Link> {` | `}
    //     <Link to='expenses'> Expenses</Link>
    //   </nav>
    //   <Outlet/>
    // </div>
    <>
    <Header/>
    <Hero/>
    <About/>
    <Service/>
    <Staff/>
    </>
    
  );
}

export default App;
