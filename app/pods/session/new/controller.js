import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['email', 'password'],
  actions: {
    signIn(provider) {
      if (this.get('session').get('isAuthenticated')) {
        Ember.Logger.info('signIn: is already authenticated, you have to signout first.');

        return;
      }

      const loginData = {
        provider,
        email: this.get('email'),
        password: this.get('password')
      };

      this.get('session')
        .open('firebase', loginData)
        .then(data => {
          Ember.Logger.info('successfuly signed in as:', data.currentUser.email);
          this.set('email', '');
          this.set('password', '');
        },
          error => Ember.Logger.warn('failed to login as:', loginData.email, error)
        );
    }
  }
});
