import React, { Component } from 'react';
import { Header, SearchBar, VideoList, VideoDetail } from './components';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
