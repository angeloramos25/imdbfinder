const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const SearchForm = require('./SearchForm.js');
const MovieResults = require('./MovieResults.js');

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  render: function() {
    if (this.state.movies == '') {
      var movieResults = '';
    } else {
      movieResults = <MovieResults movies={this.state.movies} />
    }
    return(
      <div>
        <h2>IMDB Finder</h2>
        <SearchForm />
        {movieResults}
      </div>
    )
  },
  _onChange: function() {
    this.setState(getAppState());
  }
});

module.exports = App;
