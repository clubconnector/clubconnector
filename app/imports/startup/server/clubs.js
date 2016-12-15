import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';
import { Tags } from '../../api/tags/tags.js';


/**
 * A list of Clubs to pre-fill the Collection.
 * @type {*[]}
 */
const clubSeeds = [
    // Academic/Professional
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
    imgUrl: '/images/CR.jpg',
  },
  {
    type: 'Academic/Professional',
    orgName: 'American Society of Civil Engineers',
    acronym: '',
    contactName: 'Lauren Ho',
    contactEmail: 'laurenm6@hawaii.edu',
    orgEmail: 'asce@hawaii.edu',
    orgWebsite: 'asceuhm.weeebly.com',
    orgSocial: 'Facebook: ASCE',
    tags: ['Engineering'],
  },
    // Ethnic/Cultural
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
    type: 'Ethnic/Cultural',
    orgName: 'Korean Student Association',
    acronym: '',
    contactName: 'Sungha John Jun',
    contactEmail: 'sjjun@hawaii.edu',
    orgEmail: 'uhmkso@gmail.com',
    orgWebsite: '',
    orgSocial: 'Facebook: Korean Student Association at UHM',
    tags: ['International'],
  },

    // Fraternity/Sorority
  {
    type: 'Fraternity/Sorority',
    orgName: 'Alpha Gamma Delta',
    acronym: '',
    contactName: 'Dani Mullin',
    contactEmail: 'mdmullin@hawaii.edu',
    orgEmail: 'agdhawaii@gmail.com',
    orgWebsite: 'hawaii.alphagammadelta.org',
    orgSocial: 'Facebook: Alpha Gamma Delta Hawaii',
    tags: ['Fraternity'],
  },
  {
    type: 'Psi Chi',
    orgName: 'Alpha Gamma Delta',
    acronym: '',
    contactName: 'Emily Badillo',
    contactEmail: 'ebadillo@hawaii.edu',
    orgEmail: 'psichi@hawaii.edu',
    orgWebsite: '',
    orgSocial: '',
    tags: ['Fraternity, Sorority'],
  },
    // Honorary Society
  {
    type: 'Honorary Society',
    orgName: 'Golden Key International Honour Society',
    acronym: '',
    contactName: 'Krissen Lee',
    contactEmail: 'krissenL@hawaii.edu',
    orgEmail: 'gk-l@lists.hawaii.edu',
    orgWebsite: 'http://uhm.goldenkey.org',
    orgSocial: 'Facebook: http://www.facebook.com/Univer',
    tags: ['Honorary'],
  },
    // Leisure/ Recreational
  {
    type: 'Leisure/Recreational',
    orgName: 'Theatre and Dance Association',
    acronym: 'TADA',
    contactName: 'Michelle Huynh',
    contactEmail: 'mvhuynh@hawaii.edu',
    orgEmail: 'tadauhm@gmail.com',
    orgWebsite: '',
    orgSocial: 'Facebook: TADA UHM',
    tags: ['Art', 'Music'],
    imgUrl: '/images/DC.jpg',
  },
  {
    type: 'Leisure/Recreational',
    orgName: 'League of Legends Club at UH Manoa',
    acronym: '',
    contactName: 'Eric Ucol',
    contactEmail: 'lolcub@hawaii.edu',
    orgEmail: 'lolclub@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'Facebook: TADA UHM',
    tags: ['Art', 'Music'],
  },
    // Political
  {
    type: 'Political',
    orgName: 'Student Alliance for Animals',
    acronym: 'SAFA',
    contactName: 'Shauna Leake',
    contactEmail: 'sleake@hawaii.edu',
    orgEmail: 'safa@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'Facebook: safa at uh manoa',
    tags: ['Outdoors'],
    imgUrl: '/images/AM.jpg',
  },
  {
    type: 'Political',
    orgName: 'Young Americans for Liberty',
    acronym: '',
    contactName: 'Maggie Hinshaw',
    contactEmail: 'maggieh@hawaii.edu',
    orgEmail: 'yalatuhm@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'Facebook: Young Americans for Liberty at University of Hawaii at Manoa',
    tags: ['Outdoors'],
  },
    // Religious/Spiritual
  {
    type: 'Religious/Spiritual',
    orgName: 'Every Nation Campus Honolulu',
    acronym: '',
    contactName: 'Kelly Manzano',
    contactEmail: 'kellyum@hawaii.edu',
    orgEmail: 'isuh@hawaii.edu',
    orgWebsite: '',
    orgSocial: 'Facebook: Every Nation Campus Honolulu ',
    tags: ['Religious'],
  },
    // Service
  {
    type: 'Service',
    orgName: 'AlohaThon Dance Marathon',
    acronym: '',
    contactName: 'Alysia Martin',
    contactEmail: 'alysiaam@hawaii.edu',
    orgEmail: 'alohathon.uhm@gmail.com',
    orgWebsite: '',
    orgSocial: 'Facebook: facebook.com/alohathon.uhm',
    tags: ['Service'],
  },
  {
    type: 'Service',
    orgName: 'That Sandwich Club',
    acronym: '',
    contactName: 'Paul Santiago',
    contactEmail: 'rprs@hawaii.edu',
    orgEmail: 'thatsandwichclub@gmail.com',
    orgWebsite: '',
    orgSocial: 'Facebook: That Sandwich Club',
    tags: ['Service'],
  },
    // Sports/Leisure
  {
    type: 'Sports/Leisure',
    orgName: 'Manoa Martial Arts Coalition',
    acronym: '',
    contactName: 'Peter Chong Jian Li',
    contactEmail: 'petercjl@hawaii.edu',
    orgEmail: 'mmac@hawaii.edu',
    orgWebsite: '',
    orgSocial: '',
    tags: ['Sports'],
  },
  {
    type: 'Sports/Leisure',
    orgName: 'Aikido @ UHM',
    acronym: '',
    contactName: 'Tim Holiday',
    contactEmail: 'halliday@hawaii.edu',
    orgEmail: 'VSOatUH@gmail.com',
    orgWebsite: '',
    orgSocial: '',
    tags: ['Sports'],
  },
    // Student Affairs
  {
    type: 'Student Affairs',
    orgName: 'Arnold Air Society',
    acronym: '',
    contactName: 'Caleb Blackwell',
    contactEmail: 'cblack67@hawaii.edu',
    orgEmail: '',
    orgWebsite: '',
    orgSocial: '',
    tags: ['Student Affairs'],
  },

];

/**
 * Initialize the Clubs collection if empty with seed data.
 */
// this is to make sure that these values update each time the server refreshes
// remove on production
if (Clubs.find().count() === 0) {
  _.each(clubSeeds, function seedContacts(club) {
    Clubs.insert(club);
  });
}
