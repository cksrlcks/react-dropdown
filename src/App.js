import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Main from './page/main';
import About from './page/about';
function App() {
    return (
        <>
            <Router>
                <Header />
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
            </Router>
        </>
    );
}

export default App;
