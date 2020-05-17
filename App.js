import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/header.component' 
import Footer from './components/footer.component'
import News from './components/news/news.component'

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <Router>
        <Header></Header>
        <News />
        <Footer></Footer>
    </Router>
  }
}

export default App;
