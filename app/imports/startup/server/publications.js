import { Clubs } from '../../api/clubs/clubs.js';
import { Users } from '../../api/users/users.js';
import { Tags } from '../../api/tags/tags.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Clubs', function publishClubsData() {
  return Clubs.find();
});

Meteor.publish('Tags', function publishClubsData() {
  return Tags.find();
});

Meteor.publish('Users', function publishClubsData() {
  return Users.find();
});


