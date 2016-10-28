import { Clubs } from '../../api/clubs/clubs.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Clubs', function publishClubsData() {
  return Clubs.find();
});
