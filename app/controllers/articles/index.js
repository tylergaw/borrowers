import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['showReturned'],
  showReturned: false,

  filteredResults: function () {
    var articles = this.get('model').filterBy('state', 'borrowed');

    if (this.get('showReturned')) {
      articles = this.get('model');
    }

    return articles;
  }.property('showReturned', 'model.length')
});
