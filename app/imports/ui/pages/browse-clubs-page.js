import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';


Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    return Clubs.find();
  },
  filterList() {
    return Tags.find();
  },
});

Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
    this.subscribe('Tags');
    $('.ui.dropdown')
        .dropdown()
    ;
  });
});
Template.Browse_Clubs_Page.events({
  'click .ui.dropdown'() {
    $('.ui.dropdown').dropdown('toggle');
  },
});
