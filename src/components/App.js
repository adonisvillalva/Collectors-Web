import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from './home/Home';
import Collectors from './collectors/Collectors';
import NotFoundPage from './common/NotFoundPage';
import ImgGallery from './common/ImgGallery';
import Post from './collectors/Post';
import Unavailable from './home/Unavailable';

function App() {
  return (
    <BrowserRouter>
    <AnimatePresence>
      <Switch>
        <Route exact path = "/" component = {Home}/> 
        <Route exactly path = "/collectors" component = {Collectors}/>
        <Route exactly path = "/unavailable" component = {Unavailable}/>
        <Route exact strict path = "/post/:nid" component = {Post}/>
        <Route exact strict path = "/media/:id" component = {ImgGallery}/>
        <Route path = "*" component = {NotFoundPage}/>
      </Switch>
    </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
