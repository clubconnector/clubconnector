import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Users, UsersSchema } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

Template.Welcome.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Users');
  });
});

Template.Welcome.events({
  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function casLogout(event) {
    event.preventDefault();
    Meteor.logout();
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (!error) {
        const name = Meteor.user().profile.name;
        if (Users.findOne({ username: name }, {}) === undefined) {
          const newUser = { username: name };
          Users.insert(newUser);
        }
        const temp = Users.findOne({ username: name });
        if(temp.TOS === false) {
          FlowRouter.go('TOS');
        }
        else {
          FlowRouter.go('Browse_Clubs_Page');
        }
      }
    };
    Meteor.loginWithCas(callback);
    // if(Meteor.user() !== null) {
    //
    // }
    return false;
  },
});

Template.Welcome.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  userStatus() {
    if (Meteor.user()) {
      return 'cas-logout';
    } else {
      return 'cas-login';
    }
  },
});
