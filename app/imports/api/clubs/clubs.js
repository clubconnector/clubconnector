import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { TagsSchema } from '../tags/tags.js';

/* eslint-disable object-shorthand */

export const Clubs = new Mongo.Collection('Clubs');

/**
 * Create the schema for Clubs
 */

export const ClubsSchema = new SimpleSchema({
  type: {
    label: 'type',
    type: String,
    optional: false,
    max: 30,
  },
  orgName: {
    label: 'orgName',
    type: String,
    optional: false,
    max: 50,
  },
  acronym: {
    label: 'acronym',
    type: String,
    optional: true,
    max: 10,
  },
  contactName: {
    label: 'contactName',
    type: String,
    optional: false,
    max: 40,
  },
  contactEmail: {
    label: 'contactEmail',
    type: String,
    optional: false,
    max: 30,
  },
  orgEmail: {
    label: 'orgEmail',
    type: String,
    optional: true,
    max: 30,
  },
  orgWebsite: {
    label: 'orgWebsite',
    type: String,
    optional: true,
    max: 40,
  },
  orgSocial: {
    label: 'orgSocial',
    type: String,
    optional: true,
    max: 50,
  },
  tags: {
    label: 'tags',
    type: [String],
    optional: true,
    max: 50,
  },
  imgUrl: {
    label: 'imgUrl',
    type: String,
    optional: false,
    max: 50,
    defaultValue: '/images/profile.png',
  },
});

Clubs.attachSchema(ClubsSchema);
