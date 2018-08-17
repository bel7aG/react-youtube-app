import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  const videoList = videos.map((video) =>
    <VideoListItem key={video.etag} video={video} />
  );
  return (
    <div className="list-box">
      <ul className="list-items">
        {videoList}
      </ul>
    </div>
  );
};

export default VideoList;
