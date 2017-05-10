import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAWBq_HuXZtHbLUCe5TEMOVl7gB8fGUMBM'

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'In cold blood'},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
  //    this.setState({ videos: videos }) mesma coisa pq o nome das 2 variaveis é o mesmo
      console.log(this.state.videos);
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
