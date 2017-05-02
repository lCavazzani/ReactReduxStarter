import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAWBq_HuXZtHbLUCe5TEMOVl7gB8fGUMBM'

class App extends Component {

  constructor(props){
    super(props)

    this.state={videos: []}

    YTSearch({key: API_KEY, term: 'League of legends'},(videos)=> {
      this.setState({ videos })
  //    this.setState({ videos: videos }) mesma coisa pq o nome das 2 variaveis é o mesmo
      console.log(this.state.videos);
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
