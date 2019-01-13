import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


class SongList extends React.Component {
  render() {
    const songsMapped = this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      )
    })
    return (
      <div className="ui divided list">
        <h2>SongList</h2>
        {songsMapped}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs
  }
}
// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps, { selectSong : selectSong })(SongList)