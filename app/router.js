import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function(){
    this.route('course', {path: ':course_id'});
  });
  this.route('customers', function(){
    this.route('customer', {path: ':customer_id'});
  });
  this.route('studios', function() {
    this.route('studio', {path: ':slug'}, function() {
      this.route('courses', function(){
        this.route('course', {path: ':course_id'});
        this.route('new');
      });
    });
  });
});

export default Router;
