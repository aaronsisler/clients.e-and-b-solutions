import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;