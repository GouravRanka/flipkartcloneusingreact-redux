
import React, { createContext } from "react"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx"
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/ItemDetail/DetailView";
import {Box} from "@material-ui/core"

import qs from 'qs';


function App() {
  return (
    < TemplateProvider>
    <ContextProvider>
    <BrowserRouter>
   
   <Header/>
   <Box style={{marginTop:"55px"}}>
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/cart" component={Cart} />
   <Route exact path="/product/:id" component={DetailView} />
   </Switch>
   </Box>
   </BrowserRouter>
   </ContextProvider>
   </TemplateProvider>
  );
}

export default App;
