import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function () {
      this.transitionTo('articles', this.modelFor('friends/edit'));
      return false;
    }
  }
});
