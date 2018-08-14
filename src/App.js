import React, { Component } from 'react';
import { Header, SearchBar, VideoList, VideoDetail } from './components';

const API_KEY = `AIzaSyAa5vHBSrUTjWotnKfKGYsk8g_Nb2K-aFw`;

export default class App extends Component {

  onSearchBarChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onChange={this.onSearchBarChange}
        />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
