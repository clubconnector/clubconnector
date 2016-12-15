import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { _ } from 'meteor/underscore';
import { Clubs, ClubsSchema } from '../../api/clubs/clubs.js';
import { Tags } from '../../api/tags/tags.js';

/* eslint-disable object-shorthand, no-unused-vars */

const displayErrorMessages = 'displayErrorMessages';
function tagsList() {
  return Tags.find();
}
function club() {
  return Clubs.findOne({ _id: FlowRouter.getParam('_id') });
}

Template.Edit_Club_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Clubs');
    this.subscribe('Tags');
  });
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubsSchema.namedContext('Edit_Contact_Page');
});

Template.Edit_Club_Page.helpers({
  contactField(fieldName) {
    const contact = Clubs.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return contact && contact[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
  club,
  tagsList,
});

Template.Edit_Club_Page.onRendered(function enableSemantic() {
  const template = this;

  template.subscribe('Clubs', () => {
     // Use this template.subscribe callback to guarantee that the following code executes after subscriptions OK.
    Tracker.afterFlush(() => {
      const dd = template.$('#typeDropdown.ui.selection.dropdown');
      dd.dropdown({});
      dd.dropdown('set selected', club().type);
      const tagsDD = template.$('#tagsDropdown.ui.selection.dropdown');
      tagsDD.dropdown({});
      tagsDD.dropdown('set selected', club().tags);


      // Use Tracker.afterFlush to guarantee that the DOM is re-rendered before calling JQuery.
    });
  });
  template.subscribe('Tags', () => {
    // Use this template.subscribe callback to guarantee that the following code executes after subscriptions OK.
    Tracker.afterFlush(() => {
      const tagsDD = template.$('#tagsDropdown.ui.selection.dropdown');
      tagsDD.dropdown({});
      tagsDD.dropdown('set selected', club().tags);


      // Use Tracker.afterFlush to guarantee that the DOM is re-rendered before calling JQuery.
    });
  });
});

Template.Edit_Club_Page.events({
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

    const updatedClub = { type, orgName, acronym, contactName, contactEmail, orgEmail, orgWebsite, orgSocial,
      tags, imgUrl, bannerimgUrl, description };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ClubsSchema.clean(updatedClub);
    // Determine validity.
    instance.context.validate(updatedClub);
    if (instance.context.isValid()) {
      Clubs.update(FlowRouter.getParam('_id'), { $set: updatedClub });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Browse_Clubs_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },

  'click .delete'(event, instance) {
    event.preventDefault();
    if (confirm('Do you really want to delete this entry?')) {
      // Clear out any old validation errors.
      instance.context.resetValidation();
      if (instance.context.isValid()) {
        Clubs.remove(FlowRouter.getParam('_id'));
        instance.messageFlags.set(displayErrorMessages, false);
        FlowRouter.go('Browse_Clubs_Page');
      }
    }
  },
});
