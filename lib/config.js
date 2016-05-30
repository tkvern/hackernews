if (Meteor.isClient) {
  Meteor.startup(function () {
    var lang = window.navigator.userLanguage || window.navigator.language;
    T9n.setLanguage(lang);
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  })
}