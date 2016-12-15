import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Users } from '../../api/users/users.js';

Template.Cas_Login.events({
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
        if (temp.TOS === false) {
          FlowRouter.go('TOS');
        } else {
          FlowRouter.go('Browse_Clubs_Page');
        }
      }
    };
    Meteor.loginWithCas(callback);
    return false;
  },
});

// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Cas_Login.onRendered(function enableDropDown() {
  /*this.$('#accountDropdown.dropdown').dropdown({
    action: 'select',
  });*/
});

Template.Cas_Login.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  userStatus() {
    if (Meteor.user()) {
      return 'cas-logout';
    }
      else {
      return 'cas-login';
    }
  }
});

Template.Cas_Login.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Users');
  });
});
