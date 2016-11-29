import { Template } from 'meteor/templating';
import { Tags } from '../../api/tags/tags.js';
import { ReactiveDict } from 'meteor/reactive-dict';

const dict = new ReactiveDict();
dict.set('filters', '');
Template.Filter_Dropdown.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  filterList() {
    return Tags.find();
  },
  values() {
    return dict.get('filters');
  },
});

Template.Filter_Dropdown.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Tags');
  });
});
Template.Filter_Dropdown.events({

});
Template.Filter_Dropdown.onRendered(function enableDropdown() {
  this.$('#filterDropdown.ui.multiple.selection.dropdown').dropdown({
    onChange(value) {
      dict.set('filters', value);
    },
  });
});
