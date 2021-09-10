
module.exports = {
  server: {
    port: 9000
  },
  key: {
    privateKey: 'test_tata_aig',
    tokenExpireInMinutes: 1440
  },
  User: [],
  Item: [],
  id: function(prefix) {
    return prefix + '_' + new Date().getTime()
  }
};