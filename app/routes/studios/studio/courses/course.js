import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.peekRecord('course', {course_slug: params.course_slug});
  },
  serialize: function(model) {
    return { course_slug: model.get('course_slug')};
  }
});
