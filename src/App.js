import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './component/UI/Navbar/Navbar';
import Pokemons from './container/Pokemons/Pokemons';
import PokemonDetails from './container/Pokemons/PokemonDetails/PokemonDetails';
import Home from './component/Home/Home';

const menuItens = [
  {
    path: '/home',
    name: 'Home'
  },
  {
    path: '/pokemons',
    name: 'Pokémons'
  }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar itemsList={menuItens} />
        </div>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/pokemons' exact component={Pokemons} />
          <Route path='/pokemons/:name' component={PokemonDetails} />
          <Redirect from='/' to='/home' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;