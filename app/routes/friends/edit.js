import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function () {
    var model = this.modelFor('friends/edit');
    model.rollback();
  },
  actions: {
    cancel: function () {
      this.transitionTo('articles', this.modelFor('friends/edit'));
      return false;
    }
  }
});
