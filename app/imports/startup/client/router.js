import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/landing-page', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/browse-clubs', {
  name: 'Browse_Clubs_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Clubs_Page' });
  },
});

FlowRouter.route('/add-club', {
  name: 'Add_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Club_Page' });
  },
});

FlowRouter.route('/edit-club/:_id', {
  name: 'Edit_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Club_Page' });
  },
});

FlowRouter.route('/club-page/123', {
  name: 'Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Club_Page' });
  },
});

FlowRouter.route('/user-home', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/profile/', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

