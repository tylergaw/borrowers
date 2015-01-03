import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('friend');
  },
  actions: {
    cancel: function () {
      this.transitionTo('friends');
      return false;
    }
  }
});
