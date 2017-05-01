import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAWBq_HuXZtHbLUCe5TEMOVl7gB8fGUMBM'

YTSearch({key: API_KEY, term: 'League of legends'}, function (data) {
  console.log(data);
})


const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
