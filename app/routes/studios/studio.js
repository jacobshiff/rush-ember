import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.peekRecord('studio', {studio_slug: params.studio_slug});
  },
  serialize: function(model) {
    return { studio_slug: model.get('studio_slug')};
  }
});
