import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  instructor: attr(),
  description: attr(),
  category_tags: attr(),
  studio: belongsTo('studio'),
  customers: hasMany('customer'),
  course_slug: function() {
    return this.get('title').replace(/\s+/g, '-').toLowerCase();
  }.property()
  // schedule: hasMany('schedule')
});
