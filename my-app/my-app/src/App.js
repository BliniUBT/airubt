import './index.css';
import './assets/css/style.css';
import ForLogin from './components/login/forlogin';
import Header from './components/Header'

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
            <BrowserRouter>
                <Switch>
                    {/*<Route path="*" component={Header}/>*/}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={ForLogin}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
