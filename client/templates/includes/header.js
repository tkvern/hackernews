Template.header.helpers({
  pageTitle: function() {
    Session.set('pageTitle', 'HackerNews');
    return Session.get('pageTitle');
  }
})