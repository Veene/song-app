import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component {
  render() {
    return (
      <div>
        <h2>SongDetail</h2>
        <div>{this.props.song ? this.props.song.title : null}</div>
        <div>{this.props.song ? this.props.song.duration : null}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)