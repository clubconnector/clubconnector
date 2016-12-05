import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

const dict = new ReactiveDict();
dict.set('filters', '');
dict.set('search', '');
Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    const filters = dict.get('filters').split(',');
    const terms = dict.get('search').split(' ');
    const query = { $and: [
      { $or: [
        { orgName: { $all: _.map(terms, (val) => (new RegExp(val, 'i'))) } },
        { acronym: { $all: _.map(terms, (val) => (new RegExp(val, 'i'))) } },
      ] },
    ] };
    if (filters[0] !== '') {
      query.$and.push({ tags: { $all: filters } });
    }
    const list = Clubs.find(query);
    return list;
  },
  search() {
    const search = dict.get('search').split(' ');
    return search;
  },
});

Template.registerHelper('updateFilter', (filters, search) => {
  dict.set('filters', filters);
  dict.set('search', search);
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
