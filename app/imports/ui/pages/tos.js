import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users, UsersSchema } from '../../api/users/users.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

Template.TOS.events({
  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .decline': function declineTOS(event) {
    event.preventDefault();
    console.log('declined');
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .accept': function acceptTOS(event, instance) {
    event.preventDefault();
    // Users.update({ username: Meteor.user().profile.name }, { $set: { TOS: true } });
    console.log(Users.findOne({ username: 'keanur' }));
    // FlowRouter.go('Browse_Clubs_Page');
    console.log('accepted');
    return false;
  },
});

