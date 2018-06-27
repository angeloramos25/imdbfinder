const AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=58292a6&s=' + movie.title,
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(request,status,error) {
        alert(error);
      }.bind(this)
    });
  }
}
