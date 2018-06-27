const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

var Movie = React.createClass({
  render: function() {
    var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
    return(
      <div className="card">
        <img className="card-img-top" src={this.props.movie.Poster} />
        <div className="card-body">
          <h5 className="card-title">{this.props.movie.Title}</h5>
          <p>Year Released: {this.props.movie.Year}</p>
          <p>IMDB ID: {this.props.movie.imdbID}</p>
          <a className="btn btn-dark" href={link}>View on IMDB</a>
        </div>
      </div>
    )
  }
});

module.exports = Movie;
