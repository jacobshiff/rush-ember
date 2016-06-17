import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let studio = this.modelFor('studios.studio');
    return this.store.createRecord('course', {studio: studio});
  }
});
