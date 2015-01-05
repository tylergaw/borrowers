import Ember from 'ember';

export default Ember.ArrayController.extend({
  contentDidChange: function () {
    console.log('Called when we add or removed an article');
  }.observes('model.[]'),

  stateDidChange: function () {
    console.log('Called when the state prop changes for any article');
  }.observes('model.@each.state')
});
