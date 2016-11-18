/**
 * Created by reedvilanueva on 10/19/16.
 */
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor'; // to access Meteor.users collection
import { Clubs } from '../../api/clubs/clubs.js';

// consts to use in reactive dicts
const displayErrorMessages = 'displayErrorMessages';

const aboutActive = 'aboutActive';
const eventsActive = 'eventsActive';
const membersActive = 'membersActive';

Template.Club_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('UserData');  // extended Meteor.user collection data
    this.subscribe('Clubs');
  });

  // use reactive dict to store error messages
  this.messageFlags = new ReactiveDict();  // recall, reactive dicts can store template key/vals w/out refreshing
  this.messageFlags.set(displayErrorMessages, false);

  this.navMenuActive = new ReactiveDict();
  this.navMenuActive.set(aboutActive, true);
  this.navMenuActive.set(eventsActive, false);
  this.navMenuActive.set(membersActive, false);
});

// useful thing to note, all Collection docs. have a _id key that is uniq. to that doc
Template.Club_Page.helpers({
  userDataField(fieldVal) {
    // here, we search by username, which we assume to be unique.
    const user = Meteor.users.findOne({ username: Meteor.user().username });
    // returns undefined if no matching doc. found
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    // once the subscribed collection has loaded, if the user exists, then return the specified fieldVal
    return user && user[fieldVal];
  },
  getClubData(clubName, fieldVal) {
    const club = Clubs.findOne({ orgName: clubName });
    return club && club[fieldVal];
  },
});

Template.Club_Page.helpers({
  aboutActiveClass() {
    // 'active' string also doubles as truthy
    return Template.instance().navMenuActive.get(aboutActive) ? 'active' : '';
  },
  eventsActiveClass() {
    return Template.instance().navMenuActive.get(eventsActive) ? 'active' : '';
  },
  membersActiveClass() {
    return Template.instance().navMenuActive.get(membersActive) ? 'active' : '';
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';  // empty string is falsey
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

Template.Club_Page.onRendered(function enableSemantic() {
  const instance = this;
  instance.$('select.ui.dropdown').dropdown();
  instance.$('.ui.selection.dropdown').dropdown();
  instance.$('select.dropdown').dropdown();
  instance.$('.ui.checkbox').checkbox();
  instance.$('.ui.radio.checkbox').checkbox();

  // secondary menu logic FIXME: does not work
  instance.$('select.ui.secondary.menu').ready(function () {
    instance.$('.ui .item').on('click', function () {
      instance.$('.ui .item').removeClass('active');
      instance.$(this).addClass('active');
    });
  });
});

Template.Club_Page.events({
  // change what nav menu tab is active (I know this is an ugly way to do it, but can fix later)
  'click .aboutTab'(event, instance) {
    event.preventDefault();
    Template.instance().navMenuActive.set(aboutActive, true);

    Template.instance().navMenuActive.set(eventsActive, false);
    Template.instance().navMenuActive.set(membersActive, false);
  },
  'click .eventsTab'(event, instance) {
    event.preventDefault();
    Template.instance().navMenuActive.set(eventsActive, true);

    Template.instance().navMenuActive.set(aboutActive, false);
    Template.instance().navMenuActive.set(membersActive, false);
  },
  'click .membersTab'(event, instance) {
    event.preventDefault();
    Template.instance().navMenuActive.set(membersActive, true);

    Template.instance().navMenuActive.set(eventsActive, false);
    Template.instance().navMenuActive.set(aboutActive, false);
  },

});
