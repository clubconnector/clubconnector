import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

if (!Meteor.settings.cas) {
  console.log('CAS settings not found! Hint: "meteor --settings ../config/settings.development.json"');
}

const admins = Meteor.settings.site_admin;

_.each(admins, function addAdmins(username) {
  if (Users.update({ username }, { $set: { siteAdmin: true } }) == 0) {
    Users.insert({ username, siteAdmin: true });
  }
});
