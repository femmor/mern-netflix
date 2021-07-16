import React from 'react'
import './Featured.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <img src="https://bit.ly/3xMj9KC" alt="" width="100%"/>
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/FOX_wordmark-orange.svg/1200px-FOX_wordmark-orange.svg.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a amet eaque accusamus non iusto. Commodi totam quo dignissimos quis.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
          </button>
          <button className="more-info">
            <InfoOutlinedIcon/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
