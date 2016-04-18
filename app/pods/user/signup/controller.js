import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['email', 'password'],
    firebase: Ember.inject.service(),
    actions: {
        signup() {
            Ember.Logger.info('create user:', this.get('email'));
            const userData = {
                email: this.get('email') || '',
                password: this.get('password') || '',
            };
            
            const createUserHandler = (error, userData) => {
                if (error) {
                    Ember.Logger.warn(error);
                } else {
                    Ember.Logger.info('Successfully created user account with uid:', userData.uid);
                    this.set('email', '');
                    this.set('password', '');
                    this.transitionToRoute('session.new');
                }
            };
            
            this.get('firebase').createUser(userData, createUserHandler);
        }
    }
});
