import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: false,
  sortBy: 'fullName',
  sortProperties: function () {
    return [this.get('sortBy')];
  }.property('sortBy'),

  actions: {
    setSortBy: function (fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      return false;
    }
  }
});
