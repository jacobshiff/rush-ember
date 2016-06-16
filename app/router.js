import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function(){
    this.route('course');
  });
  this.route('studios', function() {
    this.route('studio', {path: ':studio_id'}, function() {
      this.route('courses');
    });
  });
});

export default Router;
