import { Users } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

/**
 this is a list of website administrators
 */
const admins = [
  'keanur',
  'rfiggs',
  'yohany',
  'wmmb',
];

_.each(admins, function addAdmins(username) {
  if (Users.update({ username }, { $set: { siteAdmin: true } }).nMatched === 0) {
    Users.insert({ username, siteAdmin: true });
  }
});
