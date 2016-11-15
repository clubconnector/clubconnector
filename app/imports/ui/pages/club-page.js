import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';

function user() {
  return Users.findOne({ username: Meteor.user().profile.name });
}

Template.Club_Page.helpers({

  /**
   * @returns {*} the users document
   */
  user() {
    return user();
  },
  makeProfile() {
    Users.insert({ username: Meteor.user().profile.name });
  },
  noProfile() {
    return user() === undefined;
  },
});

Template.Club_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Users');
  });
});
