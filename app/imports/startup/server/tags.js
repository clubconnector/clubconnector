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
    name: 'International',
  },
  {
    name: 'Music',
  },
  {
    name: 'Sports',
  },
  {
    name: 'Service',
  },
  {
    name: 'Religious',
  },
  {
    name: 'Honorary',
  },
  {
    name: 'Student Affairs',
  },
  {
    name: 'Fraternity',
  },
];

/**
 * Initialize the Clubs collection if empty with seed data.
 */
if (Tags.find() !== tagsSeeds) {
  Tags.remove({});
  _.each(tagsSeeds, function seedTags(tag) {
    Tags.insert(tag);
  });
}
