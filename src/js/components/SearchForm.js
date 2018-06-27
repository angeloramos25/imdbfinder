const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function() {
    return(
      <div className="searchForm">
        <h5>Search IMDB for a movie:</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" />
            <button className="btn btn-dark btn-block">Search IMDB</button>
          </div>
        </form>
      </div>
    )
  },

  onSubmit: function(event) {
    event.preventDefault();
    var movie = {
      title: this.refs.title.value.trim()
    }

    AppActions.searchMovies(movie);
    this.refs.title.value = '';
  }
});

module.exports = SearchForm;
