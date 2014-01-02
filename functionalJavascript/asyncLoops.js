function loadUsers(userIds, load, done) {
  var users = [];
  var completed = 0;
  userIds.forEach(function(userId, index) {
    load(userId, function(user) {
      completed += 1;
      users[index] = user;
      if (completed === userIds.length) {
        return done(users);
      }
    });
  });
}
module.exports = loadUsers;
