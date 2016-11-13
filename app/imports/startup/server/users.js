import { Users } from '../../api/users/users.js';
import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Clubs to pre-fill the Collection.
 * @type {*[]}
 */
const usersSeeds = [
  {
    username: 'rfiggs',
    favoriteClubs: Clubs.findOne(),
    defaultFilters: '',
    siteAdmin: true,
    managedClubs: Clubs.findOne(),
  },
  {
    username: 'keanur',
    favoriteClubs: Clubs.findOne(),
    defaultFilters: '',
    siteAdmin: true,
    managedClubs: Clubs.findOne(),
  },
  {
    username: 'yohany',
    favoriteClubs: Clubs.findOne(),
    defaultFilters: '',
    siteAdmin: true,
    managedClubs: Clubs.findOne(),
  },
  {
    username: 'wmmb',
    favoriteClubs: Clubs.findOne(),
    defaultFilters: '',
    siteAdmin: true,
    managedClubs: Clubs.findOne(),
  },

];

/**
 * Initialize the Clubs collection if empty with seed data.
 */
if (Users.find().count() === 0) {
  _.each(usersSeeds, function seedUsers(user) {
    Users.insert(user);
  });
}
