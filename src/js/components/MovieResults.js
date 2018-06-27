const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Movie = require('./Movie.js')

var MovieResults = React.createClass({
  render: function() {
    return(
      <div>
        <h3>Results</h3>
        <div className="card-columns">
        {
          this.props.movies.map(function(movie,index) {
            return(
              <Movie movie={movie} key={index} />
            )
          })
        }
        </div>
      </div>
    )
  }
});

module.exports = MovieResults;
