import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Clubs, ClubsSchema } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

function tagsList(){
  return Tags.find();
}

Template.Add_Club_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Tags');
  });
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubsSchema.namedContext('Add_Club_Page');
});

Template.Add_Club_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
  tagsList,
});

Template.Add_Club_Page.onRendered(function enableSemantic() {
  const instance = this;
  this.subscribe('Tags', () => {
    Tracker.afterFlush(() => {
      instance.$('#typeDropdown.ui.selection.dropdown').dropdown({});
      instance.$('#tagsDropdown.ui.selection.dropdown').dropdown({});
    });
  });
});

Template.Add_Club_Page.events({
  'submit .club-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const type = event.target.type.value;
    const orgName = event.target.orgName.value;
    const acronym = event.target.acronym.value;
    const contactName = event.target.contactName.value;
    const contactEmail = event.target.contactEmail.value;
    const orgEmail = event.target.orgEmail.value;
    const orgWebsite = event.target.orgWebsite.value;
    const orgSocial = event.target.orgSocial.value;
    const tags = event.target.tags.value.split(',');
    const imgUrl = event.target.imgUrl.value;
    const bannerimgUrl = event.target.bannerimgUrl.value;
    const description = event.target.description.value;
    const newClub = { type, orgName, acronym, contactName, contactEmail, orgEmail, orgWebsite, orgSocial,
      tags, imgUrl, bannerimgUrl, description };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newClub reflects what will be inserted.
    ClubsSchema.clean(newClub);
    // Determine validity.
    instance.context.validate(newClub);
    if (instance.context.isValid()) {
      Clubs.insert(newClub);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Browse_Clubs_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

