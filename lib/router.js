Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('allPosts');}
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage'
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});