import { check } from 'meteor/check';

Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) {
    return ownsDoc(userId, post);
  },
  remove: function(userId, post) {
    return ownsDoc(userId, post);
  }
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExits: true,
        _id: postWithSameLink._id
      }
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    })

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  },

  postUpdate: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes.post, {
      title: String,
      url: String
    });

    Posts.update(postAttributes._id, {$set: postAttributes.post});
    return {
      _id: postAttributes._id
    };
  }
})