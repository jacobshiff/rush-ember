import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.peekRecord('course', params.course_id);
  }
});
