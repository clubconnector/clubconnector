import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Tags } from '../../api/tags/tags.js';
import { Users } from '../../api/users/users.js';
import { ReactiveDict } from 'meteor/reactive-dict';

const dict = new ReactiveDict();
dict.set('filters', '');
dict.set('search', '');
dict.set('favOnly', false);
dict.set('loggedIn', false);
function user() {
  let result = null;
  if (Meteor.user()) {
    result = Users.findOne({ username: Meteor.user().profile.name }, {});
  }
  return result;
}

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
  disable() {
    let result = 'disabled';
    if (Meteor.user()) {
      result = '';
    }
    return result;
  },
});

Template.Filter_Dropdown.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Tags');
    this.subscribe('Users');
  });
});

Template.Filter_Dropdown.events({
  'keyup .searchClubs, keydown .searchClubs'(event) {
    const val = event.target.value;
    dict.set('search', val);
  },
  'change #showFavorites'(event) {
    const val = event.target.checked;
    dict.set('favOnly', val);
  },
  'click #saveFilters'(event) {
    event.preventDefault();
    Users.update(user()._id, { $set: { defaultFilters: (dict.get('filters')).split(',') } });
  },
});

Template.Filter_Dropdown.onRendered(function enableDropdown() {
  const dd = this.$('#filterDropdown.ui.multiple.selection.dropdown');
  dd.dropdown({
    onChange(value) {
      dict.set('filters', value);
    },
  });
  if (Meteor.user()) {
    dict.set('filters', user().defaultFilters.join(','));
    dd.dropdown('set selected', dict.get('filters'));
    dict.set('loggedIn', true);
  }
  this.autorun(function checkUser() {
    if (Meteor.user()) {
      if (!dict.get('loggedIn')) {
        dict.set('loggedIn', true);
        if (dd.dropdown('get value') === '') {
          dict.set('filters', user().defaultFilters.join(','));
          dd.dropdown('set selected', dict.get('filters'));
        }
      }
    } else {
      if (dict.get('loggedIn')) {
        dict.set('loggedIn', false);
      }
    }
  });
});
