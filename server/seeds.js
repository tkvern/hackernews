if (Posts.find().count() == 0) {
  Posts.insert({
    title: 'Discover Meteor',
    url: 'http://www.jikexueyuan.com',
    flagged: false
  });
  Posts.insert({
    title: 'Discover Guide',
    url: 'http://www.guide.com',
    flagged: false
  });
  Posts.insert({
    title: 'Discover Baidu',
    url: 'http://www.baidu.com',
    flagged: false,
    author: 'me',
    category: 'java'
  });
}