import React, { Component } from 'react';
import { Header, SearchBar, VideoList, VideoDetail } from './components';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        come back lol
        <Header />
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
