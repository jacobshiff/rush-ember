import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function(){
    this.route('course', {path: ':course_slug'});
  });
  this.route('customers', function(){
    this.route('customer', {path: ':customer_id'});
  });
  this.route('studios', function() {
    this.route('studio', {path: ':studio_slug'}, function() {
      this.route('courses', function(){
        this.route('course', {path: ':course_slug'});
        this.route('new');
      });
    });
  });
});

export default Router;
