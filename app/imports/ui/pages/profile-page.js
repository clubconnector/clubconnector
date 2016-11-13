import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';

Template.Profile_Page.helpers({

  /**
   * @returns {*} the users document
   */
  user() {
    return Users.findOne({ username: Meteor.user().profile.name });
  },
});

Template.Profile_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Users');
  });
});
