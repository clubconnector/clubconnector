import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';
import { Tags } from '../../api/tags/tags.js';


/**
 * A list of Clubs to pre-fill the Collection.
 * @type {*[]}
 */
const clubSeeds = [
  {
    type: 'Academic/Professional',
    orgName: 'Academy of Creative Media Student Association',
    acronym: '',
    contactName: 'Alexander Jordan Vetter',
    contactEmail: 'avetter@hawaii.edu',
    orgEmail: 'acmsa@hawaii.edu',
    orgWebsite: '',
    orgSocial: '',
    tags: ['Art'],
  },
  {
    type: 'Ethnic/Cultural',
    orgName: 'Islamic Society at University of Hawaii at Manoa',
    acronym: '',
    contactName: 'Meriam Salameh',
    contactEmail: 'meriams@hawaii.edu',
    orgEmail: 'isuh@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'Facebook: IslamicSocietyatUH',
    tags: ['International'],
  },
  {
    type: 'Leisure/Recreational',
    orgName: 'Theatre and Dance Association',
    acronym: 'TADA',
    contactName: 'Michelle Huynh',
    contactEmail: 'mvhuynh@hawaii.edu',
    orgEmail: 'tadauhm@gmail.com',
    orgWebsite: '',
    orgSocial: 'FB: TADA UHM',
    tags: ['Art', 'Music'],
  },
  {
    type: 'Political',
    orgName: 'Student Alliance for Animals',
    acronym: 'SAFA',
    contactName: 'Shauna Leake',
    contactEmail: 'sleake@hawaii.edu',
    orgEmail: 'safa@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'FB: safa at uh manoa',
    tags: ['Outdoors'],
  },
];

/**
 * Initialize the Clubs collection if empty with seed data.
 */
// this is to make sure that these values update each time the server refreshes
// remove on production
Clubs.remove({});
if (Clubs.find().count() === 0){
  _.each(clubSeeds, function seedContacts(club) {
    Clubs.insert(club);
  });
}
