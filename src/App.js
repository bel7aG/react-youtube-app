import React, { Component } from 'react';
import { Header, Main, SearchBar, VideoList, VideoDetail } from './components';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = `AIzaSyAa5vHBSrUTjWotnKfKGYsk8g_Nb2K-aFw`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: 0,
      term: ''
    };
    this.youtubeVideoSearch(this.state.term);
    this.searchDebounce = undefined;
  }

  youtubeVideoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }


  onSearchBarChange = (term) => {
    this.setState({ term });
    this.youtubeVideoSearch(term);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <SearchBar
            onSearchBarChange={this.onSearchBarChange}
          />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelected={(selectedVideo) => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </Main>
      </div>
    );
  }
}
