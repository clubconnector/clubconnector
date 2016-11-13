import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClubsSchema } from '../clubs/clubs.js';
/* eslint-disable object-shorthand */

export const Users = new Mongo.Collection('Users');

/**
 * Create the schema for Users
 */
export const UsersSchema = new SimpleSchema({
  username: {
    label: 'username',
    type: String,
    optional: false,
    max: 30,
  },
  favoriteClubs: {
    label: 'favoriteClubs',
    type: [ClubsSchema],
    optional: false,
    max: 50,
  },
  defaultFilters: {
    label: 'defaultFilters',
    type: [String],
    optional: false,
    max: 50,
  },
  siteAdmin: {
    label: 'siteAdmin',
    type: Boolean,
    optional: false,
  },
  managedClubs: {
    label: 'managedClubs',
    type: [ClubsSchema],
    optional: false,
    max: 50,
  },
});

Users.attachSchema(UsersSchema);
