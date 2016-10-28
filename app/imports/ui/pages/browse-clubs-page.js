import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';

Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    return Clubs.find();
  },
});

Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
  });
});
