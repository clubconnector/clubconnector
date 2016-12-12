import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users, UsersSchema } from '../../api/users/users.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

Template.TOS.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Users');
  });
});

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

    const temp = Users.findOne({ username: Meteor.user().profile.name });
    Users.update({ _id: temp._id }, { $set: { TOS: true } });
    console.log(Users.findOne({ _id:  temp._id }));
    FlowRouter.go('Browse_Clubs_Page');
    console.log('accepted');
    return false;
  },
});



