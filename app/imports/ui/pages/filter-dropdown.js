import { Template } from 'meteor/templating';
import { Tags } from '../../api/tags/tags.js';
import { ReactiveDict } from 'meteor/reactive-dict';

const dict = new ReactiveDict();
dict.set('filters', '');
dict.set('search', '');
dict.set('favOnly', false);
Template.Filter_Dropdown.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  filterList() {
    return Tags.find();
  },
  filters() {
    return dict.get('filters');
  },
  search() {
    return dict.get('search');
  },
  favOnly() {
    return dict.get('favOnly');
  },
});

Template.Filter_Dropdown.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Tags');
  });
});
Template.Filter_Dropdown.events({
  'keyup .searchClubs, keydown .searchClubs'(event) {
    const val = event.target.value;
    dict.set('search', val);
  },
  'change #showFavorites'(event) {
    const val = event.target.checked;
    console.log(val);
    dict.set('favOnly', val);
  },
});
Template.Filter_Dropdown.onRendered(function enableDropdown() {
  this.$('#filterDropdown.ui.multiple.selection.dropdown').dropdown({
    onChange(value) {
      dict.set('filters', value);
    },
  });
});
