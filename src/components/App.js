import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from './home/Home';
import Gallery from './gallery/Gallery';
import Collectors from './collectors/Collectors';
import Mistery from './mistery/Mistery';
import NotFoundPage from './common/NotFoundPage';
import ImgGallery from './common/ImgGallery';
import Post from './collectors/Post';

function App() {
  return (
    <BrowserRouter>
    <AnimatePresence>
      <Switch>
        <Route exact path = "/" component = {Home}/> 
        <Route exactly path = "/collectors" component = {Collectors}/>
        <Route exactly path = "/gallery" component = {Gallery}/>
        <Route exactly path = "/mistery" component = {Mistery}/>
        <Route exact strict path = "/post/:nid" component = {Post}/>
        <Route exact strict path = "/media/:id" component = {ImgGallery}/>
        <Route path = "*" component = {NotFoundPage}/>
      </Switch>
    </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
