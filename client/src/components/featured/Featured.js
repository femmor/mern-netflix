import React from 'react'
import './Featured.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {
        type && (
          <div className="category">
            <span>{ type === 'movie' ? 'Movies' : 'TV Series' }</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )
      }
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
