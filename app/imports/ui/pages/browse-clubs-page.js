import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';
import { Users } from '../../api/users/users.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

const dict = new ReactiveDict();
dict.set('filters', '');
dict.set('search', '');
dict.set('favOnly', false);

function user() {
  return Users.findOne({ username: Meteor.user().profile.name }, {});
}

function isFavorite(clubname) {
  return _.contains(user().favoriteClubs, clubname);
}

function toggleFav(clubName) {
  if (isFavorite(clubName)) {
    Users.update(user()._id, { $pull: { favoriteClubs: clubName } });
  } else {
    Users.update(user()._id, { $addToSet: { favoriteClubs: clubName } });
  }
}

Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    const filters = dict.get('filters').split(',');
    const terms = dict.get('search').split(' ');
    const favOnly = dict.get('favOnly');
    const query = { $and: [
      { $or: [
        { orgName: { $all: _.map(terms, (val) => (new RegExp(val, 'i'))) } },
        { acronym: { $all: _.map(terms, (val) => (new RegExp(val, 'i'))) } },
        { contactName: { $all: _.map(terms, (val) => (new RegExp(val, 'i'))) } },
      ] },
    ] };
    if (filters[0] !== '') {
      query.$and.push({ tags: { $all: filters } });
    }
    if (favOnly) {
      query.$and.push({ orgName: { $in: user().favoriteClubs } });
    }
    const list = Clubs.find(query);
    return list;
  },
  search() {
    const search = dict.get('search').split(' ');
    return search;
  },
  markFavorite(clubname) {
    let result = '';
    if (isFavorite(clubname)) {
      result = 'yellow';
    }
    return result;
  },
});

Template.registerHelper('updateFilter', (filters, search, favOnly) => {
  dict.set('filters', filters);
  dict.set('search', search);
  dict.set('favOnly', favOnly);
});

Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
    this.subscribe('Tags');
    this.subscribe('Users');
  });
});

Template.Browse_Clubs_Page.events({
  'click .favoriteButton'(event, instance) {
    const clubName = event.target.id;
    instance.$(event.target).toggleClass('yellow');
    toggleFav(clubName);
  },
});

Template.Browse_Clubs_Page.onRendered(function go() {

});


Template.registerHelper('currentAdmin', function () {
  return user().siteAdmin;
});
