import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Philip',
    last: 'Johnson',
    address: '1680 East-West Rd.',
    telephone: '808-956-3489',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'Henri',
    last: 'Casanova',
    address: '1680 East-West Rd.',
    telephone: '808-956-2649',
    email: 'henric@hawaii.edu',
  },
  {
    first: 'David',
    last: 'Chin',
    address: '1680 East-West Rd.',
    telephone: '808-956-3489',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'Kim',
    last: 'Binsted',
    address: '1680 East-West Rd.',
    telephone: '808-956-6107',
    email: 'chin@hawaii.edu',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
