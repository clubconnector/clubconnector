import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

const dict = new ReactiveDict();
dict.set('filters', []);
Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    const filters = dict.get('filters').split(',');
    let query = {};
    if (filters[0] !== '') {
      query = { tags: { $all: filters } };
    }
    return Clubs.find(query);
  },
});

Template.registerHelper('updateFilter', (string) => {
  dict.set('filters', string);
});

Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
    this.subscribe('Tags');

  });
});
Template.Browse_Clubs_Page.events({

});
Template.Browse_Clubs_Page.onRendered(function enableDropdown() {

});
