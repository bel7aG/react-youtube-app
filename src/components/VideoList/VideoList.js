import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => (
  <div className="list-group-box">
    <ul className="list-group">
      {videos.map((video, index) => <VideoListItem key={index} />)}

    </ul>
  </div>
);

export default VideoList;
