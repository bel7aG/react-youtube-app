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
      term: ''
    };
    this.YoutubeVideoSearch(this.state.term);
  }

  YoutubeVideoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  onSearchBarChange = (term) => {
    this.setState({ term });
    this.YoutubeVideoSearch(term);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchBarChange={this.onSearchBarChange}
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
