import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('Landing_Page', { main: 'Welcome' });
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

FlowRouter.route('/admin-club/:_id', {
  name: 'Admin_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Club_Page' });
  },
});

FlowRouter.route('/edit-club/:_id', {
  name: 'Edit_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Club_Page' });
  },
});

FlowRouter.route('/club-page/:_id', {
  name: 'Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Club_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

