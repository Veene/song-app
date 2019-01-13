import React from 'react'
import { connect } from 'react-redux'

class SongList extends React.Component {
  render() {
    const songsMapped = this.props.songs.map((song, index) => <li key={index}>{song.title}</li>)
    return (
      <div>
        <h2>SongList</h2>
        <ul>{songsMapped}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}
// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps)(SongList)