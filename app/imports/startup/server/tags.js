import { Tags } from '../../api/tags/tags.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Clubs to pre-fill the Collection.
 * @type {*[]}
 */
const tagsSeeds = [
  {
    name: 'Computer',
  },
  {
    name: 'Art',
  },
  {
    name: 'Outdoors',
  },
  {
    name: 'Business',
  },
  {
    name: 'Foreign',
  },
  {
    name: 'Music',
  },
];

/**
 * Initialize the Clubs collection if empty with seed data.
 */
if (Tags.find().count() === 0) {
  _.each(tagsSeeds, function seedTags(tag) {
    Tags.insert(tag);
  });
}
