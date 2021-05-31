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
import {SliderData} from './components/SliderData';


import {Router, Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Admin from './admin/components/Admin';
import Users from './admin/components/User/Users';

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                    <Route exact path="/" component={Header}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={ForLogin}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/admin/Users" component={Users}/>
                    <Route exact path="/" component={Footer}/>

            </BrowserRouter>
        </div>
    );
}

export default App;
