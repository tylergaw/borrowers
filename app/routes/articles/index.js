import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var articles = this.modelFor('friends/show').get('articles');

    // NOTE: This doesn't seem necessary in this scenario, but keeping here
    // for posterity.
    //
    // if (articles.get('isFulfilled')) {
    //   articles.reload();
    // }

    return articles;
  },
  actions: {
    save: function (model) {
      model.save();
      return false;
    }
  }
});
