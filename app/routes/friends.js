import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function (friend) {
      friend.destroyRecord();
      this.transitionTo('friends.index');
    }
  }
});
