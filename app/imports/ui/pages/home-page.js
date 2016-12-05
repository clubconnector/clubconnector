import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  contactsList() {
    return Clubs.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
    this.subscribe('Users');
  });
});

