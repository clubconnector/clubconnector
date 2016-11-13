import { Users } from '../../api/users/users.js';
import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';

/**
 * A list of User information to pre-fill the Collection.
 * @type {*[]}
 */
const usersSeeds = [
  {
    username: 'rfiggs',
    firstname: 'Bobby',
    lastname: 'Figgs',
    majors: ['Computer Science'],
    favoriteClubs: [Clubs.findOne()],
    defaultFilters: [],
    siteAdmin: true,
    managedClubs: [Clubs.findOne()],
  },
];

/**
 * Resets all users to the above information.
 */
Users.remove({});
if (Users.find().count() === 0) {
  _.each(usersSeeds, function seedUsers(user) {
    Users.insert(user);
  });
}
