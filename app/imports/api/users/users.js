import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClubsSchema } from '../clubs/clubs.js';
import { TagsSchema } from '../tags/tags.js';
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
    defaultValue: [],
  },
  defaultFilters: {
    label: 'defaultFilters',
    type: [String],
    optional: false,
    max: 50,
    defaultValue: [],
  },
  siteAdmin: {
    label: 'siteAdmin',
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  managedClubs: {
    label: 'managedClubs',
    type: [ClubsSchema],
    optional: false,
    max: 50,
    defaultValue: [],
  },
});

Users.attachSchema(UsersSchema);
