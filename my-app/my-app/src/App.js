import './index.css';
import './assets/css/style.css';
import {Login} from "./components/login/index";

// import Home from './components/Home';
import Footer from './components/Footer';
// import Banner from './components/Banner';
import Cards from './components/Cards';
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';
import {Router, Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Admin from './admin/components/Admin';

function App() {
    return (
        <div className="App">
            <BrowserRouter>o
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
