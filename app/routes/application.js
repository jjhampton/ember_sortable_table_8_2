export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      statelist: Ember.$.getJSON("states.json")
    });
  }
});
