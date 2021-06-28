import './index.css';
import './assets/css/style.css';
import React, {useEffect, useState} from 'react';

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
import UserAccount from './components/UserAccountPage/UserAccount';
import HostAccount from './components/HostAccountPage/HostAccount';
import Users from './admin/components/User/Users';
import Admins from './admin/components/Admin/Admins';
import Cities from './admin/components/City/Cities';
import Hosts from './admin/components/Host/Hosts';
import Register from './components/Login/Register'
import Login from './components/Login/Login'
import Appartment from './components/HostAccountPage/components/Appartments/Appartment'





function App() {

    
    return (
        <div className="App">
            <BrowserRouter>

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home}/>
                <Route path="/admin" component={Admin} />
                <Route path="/useraccount" component={UserAccount} />
                <Route path="/hostaccount" component={HostAccount} />
                <Route path="/admin/Users" component={Users} />
                <Route path="/admin/Admins" component={Admins} />
                <Route path="/admin/Cities" component={Cities} />
                <Route path="/admin/Hosts" component={Hosts} />
                <Route path="/hostaccount/appartment" component={Appartment} />

                {/* <Route exact path="/login" component={Footer}/> */}

            </BrowserRouter>
        </div>
    );
}

export default App;
