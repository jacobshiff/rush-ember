import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      this.get('model').save().then((course) => {
        debugger;
        this.transitionToRoute('studios.studio.courses.course', course.studio, course);
      });
    }
  }
});
