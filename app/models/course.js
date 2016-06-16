import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  instructor: attr('string'),
  description: attr('string'),
  studio_id: attr('number'),
  category_tags: attr('string'),
  studio: belongsTo('studio'),
  customers: hasMany('customer')
});
