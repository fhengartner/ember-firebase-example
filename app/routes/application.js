import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      return;
    }

    this.get('session').fetch()
      .catch(error => Ember.Logger.error('failed to fetch session:', error));
  }
});
