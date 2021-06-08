import './index.css';
import './assets/css/style.css';
import ForLogin from './components/login/forlogin';

// PARTIALS
import Header from './components/Header';
import Footer from './components/Footer';
// PARTIALS END

// import Banner from './components/Banner';
import Cards from './components/Cards';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


import { Router, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Admin from './admin/components/Admin';
import Account from './components/UserAccountPage/Account';
import Users from './admin/components/User/Users';
import Admins from './admin/components/Admin/Admins';
import Cities from './admin/components/City/Cities';
import Hosts from './admin/components/Host/Hosts';




function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Route exact path="/login" component={Header} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={ForLogin} />
                <Route path="/admin" component={Admin} />
                <Route path="/account" component={Account} />
                <Route path="/admin/Users" component={Users} />
                <Route path="/admin/Admins" component={Admins} />
                <Route path="/admin/Cities" component={Cities} />
                <Route path="/admin/Hosts" component={Hosts} />
                {/* <Route exact path="/login" component={Footer}/> */}

            </BrowserRouter>
        </div>
    );
}

export default App;
