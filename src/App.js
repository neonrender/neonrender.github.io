import React, { Component } from 'react';
import Firebase from 'firebase';
import {Layout} from "antd";
import Header from "./components/header";
import Footer from "./components/footer";
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import ArtstationPage from "./pages/artstation";

class App extends Component {

    constructor(props){
        super(props);
    }

  render() {

    return (
      <HashRouter>
          <Layout>
              <Route component={Header}/>
              <div style={{minHeight:'800px'}}>
       <Switch>
       <Route path='/blog' component={HomePage}/>
       <Route path='/about' component={AboutPage} />
       <Route path='/portfolio' component={GalleryPage}/>
       <Route path={'/contact'} component={ContactPage}/>
       <Redirect path='/' to='/blog' />
       </Switch>
              </div>
       <Route component={Footer}/>

          </Layout>
      </HashRouter>
    );
  }
}

export default App;
