import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(params) {
      debugger
      let studio = this.store.findRecord('studio')
      this.get('model').save()
      // .then((course) => {
      //   this.transitionToRoute('studios.studio.courses.course', course.studio, course)
      // })
    }
  }
});
