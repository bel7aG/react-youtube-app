import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
  console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-item" onClick={onVideoSelected.bind('selectedVideo', video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
