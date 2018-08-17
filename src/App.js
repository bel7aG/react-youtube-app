import React, { Component } from 'react';
import { Header, SearchBar, VideoList, VideoDetail } from './components';
import YTSearch from 'youtube-api-search';


const API_KEY = `AIzaSyAa5vHBSrUTjWotnKfKGYsk8g_Nb2K-aFw`;



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchTerm: ''
    };

    YTSearch({key: API_KEY, term: 'ps4'}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });
  }

  componentDidUpdate() {
    console.log(this.state.videos);
  }

  onSearchBarChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    const { searchTerm } = this.state;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onChange={this.onSearchBarChange}
          searchTerm={this.state.searchTerm}
        />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
