import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['showReturned'],
  showReturned: false,

  filteredResults: function () {
    var articles = this.get('content').filterBy('state', 'borrowed');

    if (this.get('showReturned')) {
      articles = this.get('content');
    }

    return articles;
  }.property('showReturned')
});
