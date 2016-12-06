import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';


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
    return false;

    // const type = event.target.type.value;
    // const orgName = event.target.orgName.value;
    // const acronym = event.target.acronym.value;
    // const contactName = event.target.contactName.value;
    // const contactEmail = event.target.contactEmail.value;
    // const orgEmail = event.target.orgEmail.value;
    // const orgWebsite = event.target.orgWebsite.value;
    // const orgSocial = event.target.orgSocial.value;
    //
    // const newClub = { type, orgName, acronym, contactName, contactEmail, orgEmail, orgWebsite, orgSocial };
    // // Clear out any old validation errors.
    // instance.context.resetValidation();
    // // Invoke clean so that newClub reflects what will be inserted.
    // ClubsSchema.clean(newClub);
    // // Determine validity.
    // instance.context.validate(newClub);
    // if (instance.context.isValid()) {
    //   Clubs.insert(newClub);
    //   instance.messageFlags.set(displayErrorMessages, false);
    //   FlowRouter.go('Home_Page');
    // } else {
    //   instance.messageFlags.set(displayErrorMessages, true);
  },
});

Template.Welcome.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  home: function user() {
    const username = Meteor.user().profile.name;
    console.log(username);
    if(Meteor.user() !== null) {
      FlowRouter.go('Browse_Clubs_Page');
    }
    return 0;
  },
});
