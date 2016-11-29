import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

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
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    if(Meteor.user() !== undefined){
    BlazeLayout.render('App_Body', { main: 'Home_Page' });}
    return false;
  },
});

Template.Welcome.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  home: function user() {
    if(Meteor.user() !== undefined) {
      FlowRouter.go('Home_Page');
      // BlazeLayout.render('App_Body', { main: 'Home_Page' });
  }
    return 0;
  },
});
