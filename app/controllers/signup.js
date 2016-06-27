import Ember from 'ember';
export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    save(customer){
      let newCustomer = customer;
      newCustomer.save().catch((error) => {
        this.set('errorMessage', error)
      })
      .then((customer)=>{
        this.get('session')
        .authenticate('authenticator:devise',
          newCustomer.get('email'), newCustomer.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }
});
