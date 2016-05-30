Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;
    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Meteor.call('postUpdate', {_id: currentPostId, post: postProperties}, function(error, result) {

      if (!!error) {
        return alert(error.reason);
      };
      if (result && result.postExits) {
        return alert('This post already exists!');
      }
      Router.go('postPage', {_id: result._id});
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});