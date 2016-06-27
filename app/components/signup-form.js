import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  actions: {
    submit(){
      let customer = this.get('customer')
      this.attrs.triggerSave(customer);
    }
  }
});
