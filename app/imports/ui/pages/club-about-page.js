import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

function club() {
  return Clubs.findOne({ _id: FlowRouter.getParam('_id') });
}


Template.Club_About_Page.events({
});

Template.Club_About_Page.onRendered(function getClub() {
});

Template.Club_About_Page.helpers({
  club,
});

