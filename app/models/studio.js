import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  address: attr(),
  courses: hasMany('course'),
  customers: hasMany('customer'),
  studio_slug: function() {
    return this.get('name').replace(/\s+/g, '-').toLowerCase();
  }.property()
});
