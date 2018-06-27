const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const AppAPI = require('../utils/appAPI.js');

const CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  setMovieResults: function(movies) {
    _movies = movies;
  },
  getMovieResults: function() {
    return _movies;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
})

module.exports = AppStore;
