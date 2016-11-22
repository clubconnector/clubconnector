import { Template } from 'meteor/templating';
import { Tags } from '../../api/tags/tags.js';


Template.Filter_Dropdown.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  filterList() {
    return Tags.find();
  },
});

Template.Filter_Dropdown.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Tags');
  });
});
Template.Filter_Dropdown.onRendered(function enableDropdown() {
  this.$('#filterDropdown.ui.multiple.selection.dropdown').dropdown();
  console.log('drrr');
});
