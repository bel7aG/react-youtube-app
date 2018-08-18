import React, { Component } from 'react';
import { Header, SearchBar, VideoList, VideoDetail } from './components';
import YTSearch from 'youtube-api-search';


const API_KEY = `AIzaSyAa5vHBSrUTjWotnKfKGYsk8g_Nb2K-aFw`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: 0,
      searchTerm: ''
    };

    YTSearch({key: API_KEY, term: 'ps4'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  onSearchTerm = (event) => {
    console.log(event.target.value);
  }

  UNSAFE_componentDidUpdate() {
    console.log(this.state.videos);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTerm={this.onSearchTerm}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
