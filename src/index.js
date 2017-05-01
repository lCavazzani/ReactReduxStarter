import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
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
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
