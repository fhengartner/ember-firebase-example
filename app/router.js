import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() { // eslint-disable-line array-callback-return
  this.route('user', function() {
    this.route('signup');
  });

  this.route('session', function() {
    this.route('new');
    this.route('destroy');
  });
});

export default Router;
