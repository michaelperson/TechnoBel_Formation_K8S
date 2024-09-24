import  {Fragment} from 'react'
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router ,
  Switch,
  Route} from 'react-router-dom';
import './App.css';
import Heroes from './components/Heroes/Heroes';

function App() {
  return (
    <Router>
    <section className="maincontent-wrap">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
              
                <div className="maincotnent shadow-z-1">
                    <Menu/>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                          <Switch>
                            <Route path="/heroes">
                                <Heroes/>
                            </Route>
                            <Route path="/">
                              <Menu />
                            </Route>
                          </Switch>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-6 col-lg-offset-1">
                <div className="footer-wid">
                    <h2 className="wid-title">A<span>vengers</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan,</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-6">
                <div className="footer-wid">
                    <h2 className="wid-title">Newsletter</h2>
                    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat.</p>
                    <div className="newsletter-form">
                        <form action="index.html">
                          <input className="shadow-z-1" type="email"
                                placeholder="Your Email address"/>
                                <button className="btn btn-material-red">Subscribe Now!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="copyright-text">
                                <p>&copy; 2020 Marvel Heroes - All Rights Reserved. Coded with <a
                                        href="https://https://expressjs.com.org" rel="noreferrer" target="_blank">eXpress</a> and <a
                                        href="https://reactjs.org/" rel="noreferrer" target="_blank">React</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="social-links footer-social-links"><a className="btn social-link"
                                    href="https://www.facebook.com/CogniTIC"><i className="fa fa-facebook"></i>
                                    <div className="ripple-wrapper"></div>
                                </a><a className="btn social-link" href="https://twitter.com/Cognitic"><i className="fa fa-twitter"></i>
                                    <div className="ripple-wrapper"></div>
                                </a><a className="btn social-link" href="https://be.linkedin.com/company/cognitic"><i className="fa fa-linkedin"></i>
                                    <div className="ripple-wrapper"></div>
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</Router>
  );
}

export default App;
