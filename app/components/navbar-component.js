import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.attrs.triggerInvalidateSession().then(function() {
        this.transitionToRoute('signin');
      });
    }
  }
});
