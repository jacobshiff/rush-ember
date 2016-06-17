import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.peekRecord('studio', {slug: params.slug});
  },
  serialize: function(model, params) {
    return { slug: model.get('slug')};
  }
});
