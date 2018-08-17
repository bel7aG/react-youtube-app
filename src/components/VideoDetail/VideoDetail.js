import React from 'react';

const  VideoDetail = ({video}) => {

  if (!video) {
    return <h1 style={{color: '#AAA'}}>Loading</h1>
  }

  const {videoId} = video.id
  const url=`https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="">
        <iframe src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
