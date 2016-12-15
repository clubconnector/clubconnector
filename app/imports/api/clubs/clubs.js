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
    max: 50,
  },
  orgName: {
    label: 'orgName',
    type: String,
    optional: false,
    max: 80,
  },
  acronym: {
    label: 'acronym',
    type: String,
    optional: true,
    max: 10,
    defaultValue: '',
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
    max: 40,
  },
  orgEmail: {
    label: 'orgEmail',
    type: String,
    optional: true,
    max: 40,
    defaultValue: '',
  },
  orgWebsite: {
    label: 'orgWebsite',
    type: String,
    optional: true,
    max: 50,
    defaultValue: '',
  },
  orgSocial: {
    label: 'orgSocial',
    type: String,
    optional: true,
    max: 150,
    defaultValue: '',
  },
  tags: {
    label: 'tags',
    type: [String],
    optional: true,
    max: 50,
    defaultValue: [],
  },
  imgUrl: {
    label: 'imgUrl',
    type: String,
    optional: true,
    defaultValue: '/images/profile.png',
  },
  bannerimgUrl: {
    label: 'bannerimgUrl',
    type: String,
    optional: true,
    defaultValue: '/images/header_uhm.jpg',
  },
  description: {
    label: 'description',
    type: String,
    optional: true,
    defaultValue: 'Please contact this club to learn more about it',
  },
});

Clubs.attachSchema(ClubsSchema);
