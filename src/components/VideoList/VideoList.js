import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelected }) => {
  const videoList = videos.map((video) => (
    <VideoListItem
      onVideoSelected={onVideoSelected}
      key={video.etag}
      video={video}
    />
  ));
  return (
    <div className="list-box">
      <ul className="list-items">
        {videoList}
      </ul>
    </div>
  );
};

export default VideoList;
