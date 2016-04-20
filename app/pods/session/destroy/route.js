import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    if (!this.get('session').get('isAuthenticated')) {
      Ember.Logger.info('signOut: is not signed in, ignoring signout request.');

      return;
    }

    this.get('session').close();
    this.transitionToRoute('index');
  }
});
