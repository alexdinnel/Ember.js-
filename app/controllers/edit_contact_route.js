Wikipages.EditContactRoute = Ember.Route.extend({
  model: function(params) {

    returm this.store.find('contact', params.id)
  }
});
