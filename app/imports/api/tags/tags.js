import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
/* eslint-disable object-shorthand */

export const Tags = new Mongo.Collection('Tags');

/**
 * Create the schema for Tags
 */
export const TagsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 30,
  },
});

Tags.attachSchema(TagsSchema);
